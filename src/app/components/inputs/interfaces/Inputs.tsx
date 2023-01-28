import { Item } from './Item';
export interface InputPropsBase<ValueType, ChangeType = ValueType> {
    value: ValueType;
    name?: string;
    label?: string | JSX.Element;
    id?: string;
    disabled?: boolean | 'inputOnly';
    gap?: number;
    className?: string;
    labelClassName?: string;
    placeholder?: string;
    inputLength?: number;
    labelLength?: number | string;
    appendTo?: Element | 'parent' | ((ref: Element) => Element) | undefined;
    errorMessage?: string | JSX.Element;
    infoMessage?: string | JSX.Element;
    width?: number | string;
    height?: number | string;
    overflow?: string;
    textOverflow?: boolean;
    areaDescribedBy?: string;
    inputContainerLength?: number;
    inputFieldWidth?: number;
    hideErrorTooltip?: boolean;
    tabIndex?: number;
    onClick?: () => void;
    onChange?: (newValue: ChangeType) => void;
    onBlur?: (newValue: ChangeType) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export interface SelectPropsBase {
    showSearchBar?: boolean;
    showSelectedNumbersInSearchBar?: boolean;
    hideSelectAll?: boolean;
    uncontrolled?: boolean;
    selectAllText?: string;
    showSelectedLabels?: boolean;
    selectedLabelsText?: string;
    options?: Array<Item> | Array<string>;
    rowsToShow?: number | string;
    ref?: React.RefObject<HTMLDivElement>;
}
