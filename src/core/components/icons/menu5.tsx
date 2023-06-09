import * as React from 'react';

interface Menu5IconProps {
    fill?: string;
}

const Menu5Icon: React.FC<Menu5IconProps> = ({ fill }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
            <path
                fill={fill}
                fillRule="evenodd"
                d="M15.526 6.632a3.947 3.947 0 100 7.894 3.947 3.947 0 000-7.894zm-6.579 3.947a6.579 6.579 0 1113.158 0 6.579 6.579 0 01-13.158 0zm.6 11.482c-1.387.616-1.915 1.394-1.915 2.334 0 .294.052.46.128.581.075.121.256.326.743.546 1.04.47 3.097.846 7.023.846 3.927 0 5.983-.375 7.024-.846.487-.22.667-.425.743-.546.076-.12.128-.287.128-.581 0-.94-.529-1.718-1.916-2.334-1.424-.632-3.515-.956-5.979-.956-2.463 0-4.554.324-5.979.956zM8.48 19.656c1.91-.848 4.424-1.182 7.047-1.182 2.624 0 5.138.334 7.047 1.182 1.947.864 3.48 2.389 3.48 4.739 0 .614-.113 1.313-.53 1.979-.418.666-1.06 1.17-1.889 1.546-1.59.72-4.14 1.08-8.108 1.08-3.968 0-6.517-.36-8.108-1.08-.829-.375-1.47-.88-1.888-1.546-.418-.666-.53-1.365-.53-1.98 0-2.349 1.533-3.874 3.48-4.738z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
};

export default Menu5Icon;
