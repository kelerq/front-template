import React, { useEffect, useRef, useState } from 'react';
import { Item } from '../interfaces/Item';
import { InputPropsBase, SelectPropsBase } from '../interfaces/Inputs';
import { KEY_ARROW_DOWN, KEY_ARROW_UP, KEY_ENTER, KEY_TAB } from '../models/EventKeysConsts';
import { DEFAULT_FOCUS_VALUE } from 'app/hooks/useRoveFocus';
import { Checkbox } from '../Checkbox';
interface MultiSelectProps extends InputPropsBase<Array<Item>, Array<Item>>, SelectPropsBase {
    width?: number | string;
    searchTerm?: string;
    setFocusItem: React.Dispatch<React.SetStateAction<number>>;
    focusItem: number;
    searchRef?: React.RefObject<HTMLInputElement>;
    isSearchBar?: boolean;
    isInDropdown?: boolean;
    checkedItems?: number;
}

export const CheckboxList = React.forwardRef((props: MultiSelectProps, ref: React.LegacyRef<HTMLUListElement>) => {
    const { focusItem, setFocusItem } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const [selectAll, setSelectAll] = useState(false);
    const activeRef = useRef<HTMLLIElement>(null);
    const [disableMousePointer, setDisableMousePointer] = useState(false);
    const innerSearchRef = useRef<HTMLInputElement>(null);

    const onSelectAll = (checked: boolean) => {
        props.onChange && props.onChange(props.value.map(item => (item ? { ...item, checked: checked } : item)));
        setSelectAll(checked);
    };

    const onSelectionChange = (changedItem: Item, checked: boolean) => {
        props.onChange &&
            props.onChange(props.value.map(item => (item.id === changedItem.id ? { ...changedItem, checked: checked } : item)));
        if (props.value.length) {
            setSelectAll(false);
        }
    };

    useEffect(() => {
        if (props.value.filter(item => item.checked === false).length === props.value.length) {
            setSelectAll(false);
        }
    }, [props.value]);

    useEffect(() => {
        setSearchTerm(props.searchTerm || '');
    }, [props.searchTerm]);

    const results = !searchTerm
        ? props.value
        : props.value.filter((item: { label: string }) => item.label.toLowerCase().includes(searchTerm.toLowerCase()));

    // function renderSearchBar() {
    //     return (
    //         <div className="search-box">
    //             <TsrSvgIcon icon="search" color="info" pointer />
    //             <TextInput
    //                 disabled={props.disabled === 'inputOnly' || props.disabled === true}
    //                 onChange={setSearchTerm}
    //                 value={searchTerm}
    //                 type={TextType.SearchBox}
    //                 placeholder={props.placeholder}
    //                 onKeyDown={e => {
    //                     if (e.key === 'ArrowDown') {
    //                         setFocusItem(0);
    //                     }
    //                 }}
    //                 ref={innerSearchRef}
    //             />
    //             {props.showSelectedNumbersInSearchBar && (
    //                 <span className="selectedItemsNumbers">
    //                     ({props.checkedItems}/{props.value?.length})
    //                 </span>
    //             )}
    //         </div>
    //     );
    // }

    const setTabIndex = (index: number) => {
        if (props.disabled) return undefined;
        else if (index === 0 && focusItem === DEFAULT_FOCUS_VALUE && !props.showSearchBar && !props.isInDropdown) return 0;
        else if (focusItem === index) return 0;
        else return undefined;
    };

    const onKeyDownSelectAll = (event: React.KeyboardEvent<HTMLLIElement>) => {
        setDisableMousePointer(true);
        if (event.key === KEY_ENTER) {
            onSelectAll(!selectAll);
            setFocusItem(0);
        } else if (event.key === KEY_ARROW_UP) {
            innerSearchRef?.current?.focus();
            props.searchRef?.current?.focus();
            props.isSearchBar && setFocusItem(DEFAULT_FOCUS_VALUE);
        } else if (event.key === KEY_TAB) {
            setFocusItem(DEFAULT_FOCUS_VALUE);
        }
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLLIElement>, item: Item, focusedIndex: number) => {
        setDisableMousePointer(true);
        if (event.key === KEY_ENTER) {
            onSelectionChange(item, !item.checked);
            setFocusItem(focusedIndex);
        } else if (event.key === KEY_ARROW_UP && focusedIndex === 0 && props.hideSelectAll) {
            innerSearchRef?.current?.focus();
            props.searchRef?.current?.focus();
            props.isSearchBar && setFocusItem(DEFAULT_FOCUS_VALUE);
        } else if (event.key === KEY_TAB) {
            setFocusItem(DEFAULT_FOCUS_VALUE);
        } else if (event.key === KEY_ARROW_DOWN && focusedIndex === 0 && !props.isInDropdown && focusItem === 0) {
            setFocusItem(1);
        } else {
            event.preventDefault();
        }
    };

    useEffect(() => {
        const listLength = props.hideSelectAll ? results.length : results.length + 1;
        !activeRef.current && focusItem === 0 && setFocusItem(DEFAULT_FOCUS_VALUE);
        focusItem === listLength && setFocusItem(focusItem - 1);
        activeRef.current?.focus();
    }, [focusItem]);

    return (
        <>
            {/* {props.showSearchBar && renderSearchBar()} */}
            <ul ref={ref}>
                {results.length > 0 && !props.hideSelectAll && (
                    <li
                        onClick={() => {
                            onSelectAll(!selectAll);
                        }}
                        onKeyDown={event => onKeyDownSelectAll(event)}
                        onMouseMove={e => {
                            setDisableMousePointer(false);
                            setFocusItem(0);
                        }}
                        onMouseEnter={() => {
                            !disableMousePointer && setFocusItem && setFocusItem(0);
                        }}
                        ref={focusItem === 0 ? activeRef : undefined}
                        tabIndex={focusItem === 0 && !props.disabled ? 0 : undefined}
                    >
                        <Checkbox
                            label={props.selectAllText}
                            disabled={props.disabled}
                            uncontrolled={props.uncontrolled}
                            value={selectAll}
                            tabIndex={-1}
                        />
                    </li>
                )}
                {results.map((item: Item, index: number) => {
                    const focusedIndex = props.hideSelectAll ? index : index + 1;
                    return (
                        <li
                            id={item.id}
                            key={item.id}
                            onClick={() => {
                                onSelectionChange(item, !item.checked);
                                setFocusItem(focusedIndex);
                            }}
                            onKeyDown={event => {
                                onKeyDown(event, item, focusedIndex);
                            }}
                            onMouseMove={e => {
                                setDisableMousePointer(false);
                                setFocusItem(focusedIndex);
                            }}
                            onMouseEnter={() => {
                                !disableMousePointer && setFocusItem && setFocusItem(focusedIndex);
                            }}
                            ref={focusItem === focusedIndex ? activeRef : undefined}
                            tabIndex={setTabIndex(focusedIndex)}
                        >
                            <Checkbox
                                label={item.label}
                                disabled={props.disabled === 'inputOnly' || props.disabled === true}
                                id={item.id}
                                uncontrolled={props.uncontrolled}
                                value={item.checked || false}
                                additionalInfo={item.additonalInfo}
                                tabIndex={-1}
                            />
                        </li>
                    );
                })}
            </ul>
        </>
    );
});
