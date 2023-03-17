import React from 'react';

interface IconProps {
    className?: string;
}

export const SvgWrapper: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = ({ className, children, ...props }) => (
    <svg fill="none" viewBox="0 0 24 24" className={className} {...props}>
        {children}
    </svg>
);

export const DeleteIcon = ({ className }: IconProps) => (
    <SvgWrapper className={className} stroke-width="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </SvgWrapper>
);

export const EditIcon = ({ className }: IconProps) => (
    <SvgWrapper className={className} stroke-width="1.5" stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
    </SvgWrapper>
);

export const LockIcon = ({ className }: IconProps) => (
    <SvgWrapper className={className} stroke-width="1.5" stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
    </SvgWrapper>
);

export const UserIcon = ({ className }: IconProps) => {
    return (
        <SvgWrapper className={className} stroke-width="1.5" stroke="currentColor">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </SvgWrapper>
    );
};

export const ActiveIcon = ({ className }: IconProps) => {
    return (
        <SvgWrapper className={className} stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </SvgWrapper>
    );
};

export const NonActiveIcon = ({ className }: IconProps) => {
    return (
        <SvgWrapper className={className} stroke-width="1.5" stroke="currentColor">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
        </SvgWrapper>
    );
};

export const PlusIcon = ({ className }: IconProps) => {
    return (
        <SvgWrapper className={className} stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </SvgWrapper>
    );
};

export const MinusIcon = ({ className }: IconProps) => {
    return (
        <SvgWrapper className={className} stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
        </SvgWrapper>
    );
};
