import os
import time
import xml.etree.ElementTree as ET
from datetime import datetime

import requests
from supabase import Client, create_client

supabase: Client = create_client(
    os.environ.get("SUPABASE_URL"), os.environ.get("SUPABASE_KEY")
)

params = {"tool": "MIT Critical Data", "email": "mouradarchie@gmail.com"}
name = "Leo Anthony Celi"
BATCH_SIZE = 200
MAX_RETRIES = 3


def fetch_with_retry(url, params, retries=MAX_RETRIES):
    for attempt in range(retries):
        try:
            response = requests.get(url, params=params, timeout=60)
            response.raise_for_status()
            return response
        except (requests.exceptions.ChunkedEncodingError,
                requests.exceptions.ConnectionError,
                requests.exceptions.Timeout) as e:
            if attempt < retries - 1:
                wait = 2 ** attempt
                print(f"Attempt {attempt + 1} failed: {e}. Retrying in {wait}s...")
                time.sleep(wait)
            else:
                raise


search = {
    **params,
    "db": "pubmed",
    "term": f"{name}[Author]",
    "retmode": "json",
    "retmax": 1000,
}

data = fetch_with_retry(
    "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi", search
).json()

pmids = data["esearchresult"]["idlist"]
print(f"Found {len(pmids)} PMIDs for {name}")

articles = []
for i in range(0, len(pmids), BATCH_SIZE):
    batch = pmids[i : i + BATCH_SIZE]
    print(f"Fetching batch {i // BATCH_SIZE + 1} ({len(batch)} articles)...")

    fetch = {
        **params,
        "db": "pubmed",
        "id": ",".join(batch),
        "retmode": "xml",
    }

    response = fetch_with_retry(
        "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi", fetch
    )
    articles.extend(ET.fromstring(response.content).findall(".//PubmedArticle"))

    if i + BATCH_SIZE < len(pmids):
        time.sleep(0.5)

upserted = 0
for article in articles:
    title = article.find(".//ArticleTitle").text

    authors = []
    for author in article.findall(".//AuthorList/Author"):
        last = author.findtext("LastName")
        fore = author.findtext("ForeName")
        if last and fore:
            authors.append(f"{fore} {last}")

    abstracts = [
        abstract.text or ""
        for abstract in article.findall(".//Abstract/AbstractText")
    ]

    date = article.find(".//PubDate")
    year = date.findtext("Year")

    if year:
        published = (
            datetime.strptime(
                f"{year}-{date.findtext('Month') or 'Jan'}-{date.findtext('Day') or '1'}",
                "%Y-%b-%d",
            )
            .date()
            .isoformat()
        )
    else:
        published = None

    supabase.table("publications").upsert(
        {
            "title": title,
            "authors": ", ".join(authors),
            "abstract": "\n".join(abstracts) if abstracts else None,
            "comment": None,
            "link": f"https://pubmed.ncbi.nlm.nih.gov/{article.findtext('.//PMID')}",
            "publisher": article.findtext(".//Journal/Title"),
            "date_published": published,
            "tags": None,
        },
        on_conflict="title",
    ).execute()
    upserted += 1

print(f"Upserted {upserted} publications for {name} into Supabase")
