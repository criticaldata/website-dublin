'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const TruncateText = ({
	text,
	length = 200,
	expandText = '+Expand',
	collapseText = '-Collapse',
	color = 'text-gray-500',
	expandTextColor = 'text-blue-600',
	className,
}: {
	text: string;
	length?: number;
	expandText?: string;
	collapseText?: string;
	color?: string;
	expandTextColor?: string;
	className?: string;
}) => {
	const [isTruncated, setIsTruncated] = useState(true);

	const toggleIsTruncated = () => {
		setIsTruncated(!isTruncated);
	};

	const truncateText = (text: string, maxLength: number) => {
		return text.length > maxLength
			? text.substring(0, maxLength) + '...'
			: text;
	};

	const displayText = isTruncated ? truncateText(text, length) : text;

	return (
		<div
			className={cn('text-sm cursor-pointer', color, className)}
			onClick={toggleIsTruncated}
		>
			<span className="mr-2">{displayText}</span>
			{text.length > length && (
				<span
					className={cn(
						'uppercase tracking-widest text-[11px] font-medium mt-2',
						expandTextColor
					)}
				>
					{isTruncated ? expandText : collapseText}
				</span>
			)}
		</div>
	);
};

export default TruncateText;
