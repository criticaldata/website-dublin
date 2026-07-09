'use client';
import { useRef } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { cn } from '@/lib/utils';

interface LazyIframeProps {
	url: string;
	title: string;
	className?: string;
}

const LazyIframe = ({ url, title, className }: LazyIframeProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const lockRef = useRef(false);
	// Use Intersection Observer to determine if the iframe should be loaded
	const { isIntersecting } = useIntersectionObserver(
		containerRef as React.RefObject<HTMLElement>
	);
	if (isIntersecting) {
		lockRef.current = true;
	}
	return (
		<div
			className={cn("relative aspect-w-16 aspect-h-9 bg-black", className)}
			ref={containerRef}
		>
			{lockRef.current && (
				<iframe
					title={title}
					style={{
						bottom: 0,
						height: '100%',
						left: 0,
						position: 'absolute',
						right: 0,
						top: 0,
						width: '100%',
					}}
					src={url}
					className="w-full h-full"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			)}
		</div>
	);
};

export default LazyIframe;
