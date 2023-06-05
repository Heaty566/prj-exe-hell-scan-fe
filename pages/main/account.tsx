import MainLayout from '@components/layouts/MainLayout';
import { CameraIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/solid';
import { UserIcon, StarIcon, Cog6ToothIcon, MoonIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import * as React from 'react';
import { useStoreUser } from '@store/index';
import { useRouter } from 'next/router';
import { authApi, userApi } from '@core/api';
import Cookies from 'universal-cookie';
import { constant } from '@core/constant';
import clsx from 'clsx';
import { ProtectWrapper } from '@components/wrappers/ProtectWrapper';

interface AccountPageProps {}

const AccountPage: React.FC<AccountPageProps> = () => {
    const router = useRouter();
    const data = [
        {
            name: 'Thông tin cá nhân',
            icon: <UserIcon />,
            action: () => {},
        },
        {
            name: 'Thẻ thành viên',
            icon: <StarIcon />,
            action: () => {
                router.push('/main/momo');
            },
        },
        {
            name: 'Chuyển đổi tài khoản',
            icon: <UserIcon />,
            action: () => {},
        },
        {
            name: 'Cài đặt',
            icon: <Cog6ToothIcon />,
            action: () => {},
        },
        {
            name: 'Chế độ tối',
            icon: <MoonIcon />,
            action: () => {},
        },

        {
            name: 'Đăng xuất',
            icon: <ArrowLeftOnRectangleIcon />,
            action: async () => {
                const cookies = new Cookies();
                cookies.set(constant.TOKEN_COOKIE_KEY, '', { path: '/' });
                await authApi.v1PostLogout();
                router.push('/auth/login');
            },
        },
    ];

    const user = useStoreUser();

    const handleChangeAvatar = () => {
        console.log('change avatar');
    };

    const handleChangeCover = () => {
        console.log('change cover');
    };

    return (
        <MainLayout>
            <div className="flex w-full">
                <div className="flex flex-col w-full">
                    <div className=" h-[200px] flex justify-center items-center w-full bg-gray-400 relative bg-[url('https://wallpaperaccess.com/full/31189.jpg')] bg-cover">
                        {/* Cover */}
                        {/* <p className="text-xl text-white underline">Thêm ảnh bìa</p> */}
                        {/* =================== */}
                    </div>
                    <div className="relative h-10 bg-white">
                        <div className="absolute top-0 flex flex-col items-center -translate-x-1/2 -translate-y-[calc(50%-16px)] left-1/2 gap-2.5">
                            {/* Avatar */}
                            <div className="border-[5px] flex justify-center items-center bg-gray-400 border-white w-[100px] h-[100px] rounded-full bg-[url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover">
                                {/* <CameraIcon className="text-white w-9 h-9" /> */}
                            </div>
                            {/* =================== */}
                            <p className="text-xl font-bold text-gray-400">{user.name}</p>
                        </div>
                        <div className="mt-[130px] flex flex-col items-start gap-6 px-5">
                            {data.map((item, index) => (
                                <div className="flex gap-2.5 items-center text-gray-400" key={item.name} onClick={() => item.action()}>
                                    <div className="w-6 h-6">{item.icon}</div>
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default AccountPage;
