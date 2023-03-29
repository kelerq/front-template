import { SearchIcon } from 'assets/icons/icons';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import React from 'react';
import { useSearch } from './useSearch';
import _uniqueId from 'lodash/uniqueId';

const inputClasses = cva('text-xl font-base-300 rounded-lg bg-transparent outline-none pl-8 ', {
    variants: {
        variant: {
            default: 'ring-1 ring-base-border focus:ring-primary-focus',
            secondary: '',
            tertiary: '',
        },
        modifier: {
            outline: 'bg-transparent border',
            plain: 'bg-inherit border-none shadow-none',
        },
        size: {
            tiny: 'text-xs px-2 h-5',
            small: 'text-sm px-3 h-6',
            medium: 'text-lg px-4 h-8',
            large: 'text-xl  px-6 h-10',
            xl: 'text-2xl px-8 h-12',
        },
        fullWidth: {
            true: 'w-full',
        },
        isDisabled: {
            true: 'opacity-60 cursor-not-allowed focus:opacity-60 hover:opacity-60',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'small',
    },
});

interface SearchInputProps extends VariantProps<typeof inputClasses> {
    placeholder?: string;
    onSearch?: (query: string) => void;
    className?: string;
}

export const InputSearch: React.FC<SearchInputProps> = ({
    placeholder = 'Szukaj',
    onSearch,
    className,
    size,
    fullWidth,
    isDisabled,
    modifier,
    variant,
}) => {
    const id = _uniqueId('id-input-search-');

    const { query, handleSearch } = useSearch();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleSearch(event);
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <div className={classNames('relative flex items-center', className)}>
            <input
                id={id}
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder={placeholder}
                className={classNames(inputClasses({ size, fullWidth, isDisabled, modifier, variant }), className)}
            />
            <SearchIcon className="h-[20px] w-[20px] absolute ml-2  stroke-base-300" viewBox="0 0 15 15" />
        </div>
    );
};
