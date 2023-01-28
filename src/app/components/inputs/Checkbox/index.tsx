import React, { useState, KeyboardEvent } from 'react';
import _uniqueId from 'lodash/uniqueId';
import { InputPropsBase } from '../interfaces/Inputs';
import { Label } from 'app/components/Label';
import { InputContainer } from 'app/components/InputContainer';

interface InputCheckBoxProps extends InputPropsBase<boolean, boolean> {
    uncontrolled?: boolean;
    indeterminate?: boolean;
    additionalInfo?: string;
}

export function Checkbox(props: InputCheckBoxProps): JSX.Element {
    const [checked, setChecked] = useState(props.value);
    const id = _uniqueId('id-');

    function handleKeyPress(e: KeyboardEvent) {
        e.preventDefault();
        if (!props.uncontrolled) setChecked(!checked);
    }
    const onBlur = () => {
        props.onBlur && props.onBlur(props.value);
    };
    return (
        <InputContainer
            onKeyDown={e => {
                handleKeyPress(e);
            }}
        >
            <Label id={props.uncontrolled ? props.id : id} content={props.label}>
                <div>
                    <input
                        type="checkbox"
                        className={'checkbox-element ' + (props.indeterminate ? 'indeterminate' : 'normal')}
                        name={props.name}
                        id={props.uncontrolled ? props.id : id}
                        checked={props.value}
                        disabled={props.disabled === 'inputOnly' || props.disabled === true}
                        onChange={e => props.onChange && props.onChange(e.target.checked)}
                        onBlur={onBlur}
                        tabIndex={props.tabIndex}
                    />
                </div>
            </Label>
            {/* {props.additionalInfo && <Label className="additionalInfo" content={props.additionalInfo} />} */}
        </InputContainer>
    );
}
