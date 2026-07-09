const SPREADSHEET_ID = '1H6GPcTHhs7i_OL6-EfG_-bBhUyk836r5jEn-NFelPtc';
const SHEET_NAME = ''; // Leave blank to use the first sheet in the spreadsheet.

const HEADERS = [
	'receivedAt',
	'submittedAt',
	'eventName',
	'email',
	'firstName',
	'lastName',
	'days',
	'may1Attendance',
	'may2Attendance',
	'affiliation',
	'role',
	'isStudent',
	'school',
	'educationLevel',
	'interests',
	'interestsOther',
	'languages',
	'communityRoles',
	'communityRolesOther',
	'communityConnection',
	'aiComfort',
	'communityQuestion',
	'eventExperience',
	'uniquePerspective',
	'perspectiveDetails',
	'hopes',
	'heardFrom',
	'heardFromOther',
	'dietaryNone',
	'dietaryDetails',
	'linkedin',
	'hobbies',
	'rawJson',
];

function doGet() {
	return jsonResponse({
		ok: true,
		message: 'Rome registration webhook is live.',
	});
}

function doPost(event) {
	try {
		const payload = parsePayload(event);
		const sheet = getTargetSheet();
		ensureHeaders(sheet);

		const row = HEADERS.map(function (header) {
			if (header === 'receivedAt') return new Date().toISOString();
			if (header === 'rawJson') return JSON.stringify(payload);
			return payload[header] || '';
		});

		sheet.appendRow(row);

		return jsonResponse({
			ok: true,
			message: 'Registration saved.',
		});
	} catch (error) {
		console.error(error);
		return jsonResponse(
			{
				ok: false,
				error: String(error && error.message ? error.message : error),
			},
			500
		);
	}
}

function parsePayload(event) {
	if (!event || !event.postData || !event.postData.contents) {
		throw new Error('Missing POST body.');
	}

	return JSON.parse(event.postData.contents);
}

function getTargetSheet() {
	const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
	if (SHEET_NAME) {
		const namedSheet = spreadsheet.getSheetByName(SHEET_NAME);
		if (!namedSheet) {
			throw new Error('Sheet not found: ' + SHEET_NAME);
		}
		return namedSheet;
	}

	return spreadsheet.getSheets()[0];
}

function ensureHeaders(sheet) {
	const existing = sheet
		.getRange(1, 1, 1, HEADERS.length)
		.getValues()[0]
		.map(function (value) {
			return String(value || '').trim();
		});

	const hasHeaders = HEADERS.every(function (header, index) {
		return existing[index] === header;
	});

	if (!hasHeaders) {
		sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
		sheet.setFrozenRows(1);
	}
}

function jsonResponse(body, statusCode) {
	const output = ContentService.createTextOutput(JSON.stringify(body));
	output.setMimeType(ContentService.MimeType.JSON);
	// Apps Script web apps do not let ContentService set HTTP status codes.
	// The statusCode argument is kept for readability in logs/debugging.
	return output;
}
