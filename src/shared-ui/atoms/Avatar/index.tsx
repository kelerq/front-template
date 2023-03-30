import React from 'react';
import * as RadixAvatar from '@radix-ui/react-avatar';
import classNames from 'classnames';

interface AvatarProps {
    className?: string;
    label?: string;
    src?: string;
    fallback?: string;
}

const Avatar = ({ className, label, src, fallback }: AvatarProps) => (
    <div className={classNames('flex flex-col', className)}>
        <RadixAvatar.Root className="bg-neutral inline-flex h-[3.5rem] w-[3.5rem] select-none items-center justify-center overflow-hidden rounded-full align-middle">
            <RadixAvatar.Image
                className="h-full w-full rounded-[inherit] object-cover"
                src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                alt="Avatar"
            ></RadixAvatar.Image>
            <RadixAvatar.Fallback
                className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-neutral-content text-[1.5rem] font-medium"
                delayMs={600}
            >
                {fallback ? fallback : null}
            </RadixAvatar.Fallback>
        </RadixAvatar.Root>
        {label && <p className="-m-1 text-lg">{label}</p>}
    </div>
);

export default Avatar;
