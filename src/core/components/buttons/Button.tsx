import clsx from 'clsx';
import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ label, className, ...rest }) => {
    return (
        <button
            {...rest}
            className={clsx(
                'text-white rounded-[10px]  w-[156px] p-3 flex justify-center items-center bg-beauty-bush font-semibold text-base',
                className
            )}
        >
            {label}
        </button>
    );
};
