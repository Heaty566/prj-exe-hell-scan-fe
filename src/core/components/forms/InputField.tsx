import { useStoreApi } from '@store/index';
import clsx from 'clsx';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import _get from 'lodash/get';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

export const InputField: React.FunctionComponent<InputFieldProps> = ({ className, name, label, ...rest }) => {
    const { register } = useFormContext();
    const { errorDetails } = useStoreApi();

    return (
        <div className="w-full space-y-1">
            <input
                {...rest}
                {...register(name)}
                className={clsx(
                    'w-full text-[#FFBD59] placeholder:text-[#FFBD59] shadow-lg rounded-[10px] px-4 py-2 text-[26px]  border-none outline-none  bg-[#ACA4A1]',
                    className
                )}
            />
            {_get(errorDetails, name) && <p className="text-sm text-red-200">{`${label} ${_get(errorDetails, name)}`}</p>}
        </div>
    );
};
