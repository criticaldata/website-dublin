'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';

interface FilterOption {
	name: string;
	value: string;
}

interface FilterChipsProps {
	options: FilterOption[];
	selectedValues: string[];
	onSelect: (value: string) => void;
	className?: string;
}

export function FilterChips({
	options,
	selectedValues,
	onSelect,
	className,
}: FilterChipsProps) {
	return (
		<div className={cn('flex flex-wrap gap-2', className)}>
			{options.map((option) => {
				const isSelected = selectedValues.includes(option.value);
				return (
					<button
						key={option.value}
						onClick={() => onSelect(option.value)}
						className={cn(
							"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border border-transparent",
							isSelected 
								? "bg-foreground text-background shadow-sm hover:bg-foreground/90" 
								: "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
						)}
					>
						{isSelected && (
							<CheckIcon className="w-3.5 h-3.5" strokeWidth={3} />
						)}
						{option.name}
					</button>
				);
			})}
		</div>
	);
}
