import MainLayout from '@components/layouts/MainLayout';
import * as React from 'react';

interface AccountPageProps {}

const AccountPage: React.FC<AccountPageProps> = () => {
    const avatar = [
        {
            id: 1,
            url: '/assets/images/main/ava-1.png',
        },
        {
            id: 2,
            url: '/assets/images/main/ava-2.png',
        },
        {
            id: 3,
            url: '/assets/images/main/ava-3.png',
        },
        {
            id: 4,
            url: '/assets/images/main/ava-4.png',
        },
        {
            id: 5,
            url: '/assets/images/main/ava-5.png',
        },
        {
            id: 6,
            url: '/assets/images/main/ava-6.png',
        },
        {
            id: 7,
            url: '/assets/images/main/ava-7.png',
        },
        {
            id: 8,
            url: '/assets/images/main/ava-8.png',
        },
        {
            id: 9,
            url: '/assets/images/main/ava-9.png',
        },
        {
            id: 10,
            url: '/assets/images/main/ava-10.png',
        },
    ];
    return (
        <>
            <MainLayout>
                <div className="flex items-center justify-between py-[10px] px-4 bg-white shadow-lg">
                    <div>
                        <img src="/assets/images/main/logo.png" />
                    </div>
                    <div>
                        <img src="/assets/images/main/noti.png" />
                    </div>
                </div>
                <div className="px-4">
                    <div className="mt-3 space-y-2">
                        <div className=" text-beauty-bush text-[20px] font-bold text-robo mt-6">Đã thích</div>
                        <div className="grid grid-cols-2 gap-6 ">
                            {avatar.map((item) => (
                                <div className="space-y-4" key={item.id}>
                                    <div>
                                        <img src={item.url} />
                                    </div>
                                    <div className="flex space-x-4">
                                        <div className="rounded-[10px] bg-white shadow-cs w-[36px] h-[36px] flex items-center justify-center">
                                            <img src="/assets/images/highlight/figure.png" />
                                        </div>
                                        <div className="flex-1 text-center button-cs h-[36px] leading-[36px] text-robo font-bold">SỬ DỤNG</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default AccountPage;
