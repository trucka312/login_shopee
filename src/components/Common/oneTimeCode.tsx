import { useMemo } from 'react';

import '../../assets/styles/Common/oneTimeCode.scss'

import { RE_DIGIT } from '../../utils/constants'

export type OneTimeCodeProps = {
    value: string;
    valueLength: number;
    onChange: (value: string) => void;
};


const OneTimeCode = ({ value, valueLength, onChange }: OneTimeCodeProps) => {
    const valueItems = useMemo(() => {
        const valueArray = value.split('');
        const items: Array<string> = [];
    
        for (let i = 0; i < valueLength; i++) {
            const char = valueArray[i];
        
            if (RE_DIGIT.test(char)) {
                items.push(char);
            } else {
                items.push('');
            }
        }
    
        return items;
    }, [value, valueLength]);

    const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        const target = e.target;
        let targetValue = target.value;
        const isTargetValueDigit = RE_DIGIT.test(targetValue);
    
        if (!isTargetValueDigit && targetValue !== '') return;
    
        targetValue = isTargetValueDigit ? targetValue : ' ';
    
        const newValue =
            value.substring(0, idx) + targetValue + value.substring(idx + 1);
    
        onChange(newValue);
    
        if (!isTargetValueDigit) return;
    
        const nextElementSibling =
            target.nextElementSibling as HTMLInputElement | null;
    
        if (nextElementSibling) {
            nextElementSibling.focus();
        }
    };

    const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const targetValue = target.value;

        // keep the selection range position
        // if the same digit was typed
        target.setSelectionRange(0, targetValue.length);
    
        if (e.key !== 'Backspace' || target.value !== '') return;
    
        const previousElementSibling =
            target.previousElementSibling as HTMLInputElement | null;
    
        if (previousElementSibling) {
            previousElementSibling.focus();
        }
    };

    const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const { target } = e;
    
        target.setSelectionRange(0, target.value.length);
    };
    
    return (
        <div className="otp-group">
            {valueItems.map((digit, idx) => (
                <input
                key={idx}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="\d{1}"
                maxLength={valueLength}
                className="otp-input"
                value={digit}
                onChange={(e) => inputOnChange(e, idx)}
                onKeyDown={inputOnKeyDown}
                onFocus={inputOnFocus}
                title='opt'
                />
            ))}
        </div>
    )
};

export default OneTimeCode;
