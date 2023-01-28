import { ButtonAndroid } from './ButtonAndroid';
import { ButtonIOS } from './ButtonIOS';
import React from 'react';

class ButtonFactory {
    static createButton(type: string) {
        if (type === 'ios') {
            return <ButtonIOS>{}</ButtonIOS>;
        } else if (type === 'android') {
            return <ButtonAndroid>{}</ButtonAndroid>;
        }
    }
}

const Button = ButtonFactory.createButton('ios');
