import * as React from 'react';

interface SocialLoginProps {}

export const SocialLogin: React.FunctionComponent<SocialLoginProps> = () => {
    const socialLogin = [
        {
            name: 'Apple',
            icon: '/assets/images/login/apple.png',
        },
        {
            name: 'Google',
            icon: '/assets/images/login/google.png',
        },
        {
            name: 'Facebook',
            icon: '/assets/images/login/facebook.png',
        },
    ];
    return (
        <div className="flex flex-col gap-4 text-base text-white">
            <div className="flex flex-col items-center justify-center gap-1">
                <p>Hoặc</p>
                <div className="w-24 h-px bg-white" />
            </div>
            <div className="flex gap-[30px]">
                {socialLogin.map((item) => (
                    <div className="w-8 h-8" key={item.name}>
                        <img src={item.icon} className="object-cover w-auto h-full" />
                    </div>
                ))}
            </div>
        </div>
    );
};
