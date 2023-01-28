import React from 'react';
import { TooltipType } from './models/TooltipType';
import Tippy, { TippyProps } from '@tippyjs/react';

interface TooltipProps {
    disabled?: boolean | 'inputOnly';
    type?: TooltipType;
    icon?: boolean;
}

export const Tooltip: React.FC<TooltipProps & TippyProps> = (props): JSX.Element => {
    const { children, icon, disabled, ...restProps } = props;
    const popperOptions = {
        modifiers: [
            {
                name: 'flip',
                options: {
                    fallbackPlacements: ['bottom', 'top', 'right', 'left'],
                },
            },
            {
                name: 'preventOverflow',
                options: {
                    mainAxis: true,
                    tether: true,
                },
            },
        ],
    };

    return (
        <Tippy
            theme={props.type || TooltipType.Info}
            disabled={disabled}
            arrow={false}
            placement="bottom-end"
            popperOptions={popperOptions}
            duration={0}
            {...restProps}
        >
            {props.icon ? children : <div>{children}</div>}
        </Tippy>
    );
};
