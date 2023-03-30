import React from 'react';

interface IconProps {
    className?: string;
    viewBox?: string;
}

export const SvgWrapper: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = ({
    className,
    children,
    viewBox = '0 0 24 24',
    ...props
}) => (
    <svg fill="none" className={className} viewBox={viewBox} {...props}>
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
            <path
                d="M15.75 6C15.75 6.99456 15.3549 7.94839 14.6516 8.65165C13.9484 9.35491 12.9945 9.75 12 9.75C11.0054 9.75 10.0516 9.35491 9.34833 8.65165C8.64506 7.94839 8.24998 6.99456 8.24998 6C8.24998 5.00544 8.64506 4.05161 9.34833 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9945 2.25 13.9484 2.64509 14.6516 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6ZM4.50098 20.118C4.53311 18.1504 5.33731 16.2742 6.74015 14.894C8.14299 13.5139 10.0321 12.7405 12 12.7405C13.9679 12.7405 15.857 13.5139 17.2598 14.894C18.6626 16.2742 19.4668 18.1504 19.499 20.118C17.1464 21.1968 14.5881 21.7535 12 21.75C9.32398 21.75 6.78398 21.166 4.50098 20.118Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
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

export const ExclamationIcon = ({ className, viewBox }: IconProps) => {
    return (
        <SvgWrapper className={className} viewBox={viewBox} stroke-width="1.5">
            <path
                d="M51.6666 95.8332C76.9796 95.8332 97.4999 75.3129 97.4999 49.9998C97.4999 24.6868 76.9796 4.1665 51.6666 4.1665C26.3535 4.1665 5.83325 24.6868 5.83325 49.9998C5.83325 75.3129 26.3535 95.8332 51.6666 95.8332Z"
                fill="#FFC107"
            />
            <path d="M54.9999 70H48.3333V77.0833H54.9999V70Z" fill="black" stroke="black" />
            <path d="M54.9999 22.5H48.3333V60.8333H54.9999V22.5Z" fill="black" stroke="black" />
        </SvgWrapper>
    );
};

export const CloseIcon = ({ className, viewBox }: IconProps) => {
    return (
        <SvgWrapper className={className} viewBox={viewBox} stroke-width="1.5" stroke="currentColor">
            <path d="M1 13L13 1M1 1L13 13" stroke="#B7BDC6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </SvgWrapper>
    );
};

export const UsersIcon = ({ className, viewBox }: IconProps) => {
    return (
        <SvgWrapper className={className} viewBox={viewBox} stroke-width="1.5" stroke="currentColor">
            <path
                d="M15 19.128C15.853 19.3757 16.7368 19.5009 17.625 19.5C19.0534 19.5021 20.4633 19.1764 21.746 18.548C21.7839 17.6517 21.5286 16.7675 21.0188 16.0293C20.509 15.2912 19.7724 14.7394 18.9207 14.4575C18.0691 14.1757 17.1487 14.1791 16.2992 14.4674C15.4497 14.7557 14.7173 15.313 14.213 16.055M15 19.128V19.125C15 18.012 14.714 16.965 14.213 16.055M15 19.128V19.234C13.0755 20.3931 10.8706 21.0038 8.62402 21C6.29302 21 4.11202 20.355 2.25002 19.234L2.24902 19.125C2.24826 17.7095 2.71864 16.3339 3.58601 15.2153C4.45338 14.0966 5.6684 13.2984 7.03951 12.9466C8.41063 12.5948 9.85985 12.7093 11.1587 13.2721C12.4575 13.8349 13.5321 14.814 14.213 16.055M12 6.375C12 7.27011 11.6444 8.12855 11.0115 8.76149C10.3786 9.39442 9.52013 9.75 8.62502 9.75C7.72992 9.75 6.87147 9.39442 6.23854 8.76149C5.6056 8.12855 5.25002 7.27011 5.25002 6.375C5.25002 5.47989 5.6056 4.62145 6.23854 3.98851C6.87147 3.35558 7.72992 3 8.62502 3C9.52013 3 10.3786 3.35558 11.0115 3.98851C11.6444 4.62145 12 5.47989 12 6.375ZM20.25 8.625C20.25 9.32119 19.9735 9.98887 19.4812 10.4812C18.9889 10.9734 18.3212 11.25 17.625 11.25C16.9288 11.25 16.2612 10.9734 15.7689 10.4812C15.2766 9.98887 15 9.32119 15 8.625C15 7.92881 15.2766 7.26113 15.7689 6.76884C16.2612 6.27656 16.9288 6 17.625 6C18.3212 6 18.9889 6.27656 19.4812 6.76884C19.9735 7.26113 20.25 7.92881 20.25 8.625Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </SvgWrapper>
    );
};

export const PermissionsIcon = ({ className, viewBox }: IconProps) => {
    return (
        <SvgWrapper className={className} viewBox={viewBox} stroke-width="1.5" stroke="currentColor">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
            />
        </SvgWrapper>
    );
};

export const UIIcon = ({ className, viewBox }: IconProps) => {
    return (
        <SvgWrapper className={className} viewBox={viewBox} stroke-width="1.5" stroke="currentColor">
            <path
                d="M11.9125 20.1525C11.5855 19.3463 10.9883 18.6789 10.2233 18.2646C9.45834 17.8503 8.57309 17.7149 7.71922 17.8815C6.86534 18.0481 6.09597 18.5065 5.54288 19.178C4.98979 19.8496 4.6874 20.6925 4.6875 21.5625C4.6875 21.9476 4.6084 22.3287 4.4551 22.682C4.3018 23.0353 4.07757 23.3534 3.79631 23.6165C3.51504 23.8796 3.18274 24.0821 2.81999 24.2115C2.45724 24.3409 2.07178 24.3944 1.6875 24.3688C2.30556 25.4424 3.26079 26.2821 4.4049 26.7573C5.54902 27.2325 6.81801 27.3167 8.01487 26.9968C9.21174 26.6769 10.2695 25.9708 11.024 24.9882C11.7785 24.0056 12.1875 22.8014 12.1875 21.5625C12.1875 21.0638 12.09 20.5875 11.9125 20.1525ZM11.9125 20.1525C13.3988 19.6461 14.8202 18.9664 16.1475 18.1275M9.84375 18.0963C10.3503 16.6068 11.0308 15.1824 11.8712 13.8525M16.1462 18.1275C18.5167 16.6298 20.5456 14.6503 22.1012 12.3175L26.9462 5.05C27.1319 4.7732 27.2156 4.44056 27.1832 4.10887C27.1508 3.77718 27.0043 3.46702 26.7686 3.23137C26.533 2.99571 26.2228 2.84918 25.8911 2.81678C25.5594 2.78439 25.2268 2.86815 24.95 3.05375L17.6825 7.9C15.3494 9.45517 13.3695 11.4837 11.8712 13.8538C13.7736 14.7043 15.2957 16.2264 16.1462 18.1288"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </SvgWrapper>
    );
};
