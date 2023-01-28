import { InputPropsBase, SelectPropsBase } from '../interfaces/Inputs';
import React, { useRef, useMemo } from 'react';
import { Item } from '../interfaces/Item';
import _uniqueId from 'lodash/uniqueId';
import { DEFAULT_FOCUS_VALUE, useRoveFocus } from 'app/hooks/useRoveFocus';
import { InputContainer } from 'app/components/InputContainer';
import { Label } from 'app/components/Label';
import { CheckboxList } from '../CheckboxList';
import { KEY_ARROW_DOWN, KEY_TAB } from '../models/EventKeysConsts';

interface MultiSelectProps extends InputPropsBase<Array<Item>, Array<Item>>, SelectPropsBase {}

export const MultiSelectList = (props: MultiSelectProps) => {
    const id = _uniqueId('idMultiSelectList-');
    const defaultRowsToShow = 4;
    const rowHeight = 34;
    const searchBarHeightOffset = 42;
    const defaultHeight = props.showSearchBar
        ? defaultRowsToShow * rowHeight + searchBarHeightOffset
        : defaultRowsToShow * rowHeight;
    const forwardRef = useRef<HTMLUListElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const calculateHeight = props.rowsToShow
        ? props.showSearchBar
            ? (props.rowsToShow as number) * rowHeight + searchBarHeightOffset
            : (props.rowsToShow as number) * rowHeight
        : defaultHeight;
    const checkedItems = useMemo(() => {
        return props.value.filter(item => item.checked);
    }, [props.value]);

    const listLength = props.hideSelectAll ? props.value.length : props.value.length + 1;
    const [focus, setFocus] = useRoveFocus(listLength, false, innerRef);

    const labelContent = () => {
        if (props.label) {
            if (!props.showSelectedNumbersInSearchBar) {
                return `${props.label} (${checkedItems.length}/${props.value?.length})`;
            } else {
                return props.label;
            }
        }
    };
    return (
        <InputContainer>
            <Label content={labelContent()}>
                <div
                    id={props.id || id}
                    ref={innerRef}
                    onKeyDown={e => {
                        if (e.key === KEY_ARROW_DOWN) {
                            focus === DEFAULT_FOCUS_VALUE && setFocus(0);
                        }
                        if (e.key === KEY_TAB) {
                            setFocus(DEFAULT_FOCUS_VALUE);
                        }
                    }}
                >
                    {props.showSelectedLabels && (
                        <span className="checked-list-checked">
                            {checkedItems.length <= 2
                                ? checkedItems.map(item => item.label).join(', ')
                                : props.selectedLabelsText + ' (' + checkedItems.length + ')'}
                        </span>
                    )}
                    <CheckboxList
                        uncontrolled={props.uncontrolled}
                        disabled={props.disabled}
                        onChange={props.onChange}
                        showSearchBar={props.showSearchBar}
                        rowsToShow={calculateHeight}
                        className={props.className}
                        ref={forwardRef}
                        value={props.value}
                        selectAllText={props.selectAllText}
                        hideSelectAll={props.hideSelectAll}
                        placeholder={props.placeholder}
                        focusItem={focus}
                        setFocusItem={setFocus}
                        showSelectedNumbersInSearchBar={props.showSelectedNumbersInSearchBar}
                        checkedItems={checkedItems.length}
                        label={props.label}
                    />
                </div>
            </Label>
        </InputContainer>
    );
};
