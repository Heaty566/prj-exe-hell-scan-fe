import { Menu1Icon } from '@components/icons/menu1';
import Menu2Icon from '@components/icons/menu2';
import Menu3Icon from '@components/icons/menu3';
import Menu4Icon from '@components/icons/menu4';
import Menu5Icon from '@components/icons/menu5';
import MainLayout from '@components/layouts/MainLayout';
import { useStoreUser } from '@store/index';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

interface MainPageProps {}

const MainPage: React.FunctionComponent<MainPageProps> = () => {
    const user = useStoreUser();
    const router = useRouter();

    const topData = [
        {
            id: 1,
            title: 'Lễ hội',
            url: '/assets/images/main/pic-1.png',
        },
        {
            id: 2,
            title: 'Du lịch',
            url: '/assets/images/main/pic-2.png',
        },
        {
            id: 3,
            title: 'Ẩm thực',
            url: '/assets/images/main/pic-3.png',
        },
        {
            id: 4,
            title: 'Đặc sắc',
            url: '/assets/images/main/pic-4.png',
        },
        {
            id: 5,
            title: 'Tươi trẻ',
            url: '/assets/images/main/pic-5.png',
        },
        {
            id: 6,
            title: 'Cổ điển',
            url: '/assets/images/main/pic-6.png',
        },
    ];

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
        {
            id: 11,
            url: '/assets/images/main/ava-11.png',
        },
        {
            id: 12,
            url: '/assets/images/main/ava-12.png',
        },
        {
            id: 13,
            url: '/assets/images/main/ava-13.png',
        },
        {
            id: 14,
            url: '/assets/images/main/ava-14.png',
        },
        {
            id: 15,
            url: '/assets/images/main/ava-15.png',
        },
        {
            id: 16,
            url: '/assets/images/main/ava-16.png',
        },
    ];

    return (
        <MainLayout>
            <div className="flex items-center justify-between py-[10px] px-4 bg-white shadow-lg">
                <div>
                    <img src="/assets/images/main/logo.png" />
                </div>
                <div>
                    <img src="/assets/images/main/noti.png" />
                </div>
            </div>
            <div className="px-4 pt-8">
                <div className=" text-beauty-bush text-[24px] font-bold text-robo ">
                    Xin chào!<span className="capitalize"> {user.name}</span>
                </div>
                <div className="text-[#8E929B] text-[15px] font-light text-robo mt-1 leading-[150%]">
                    Cùng nhau tận hưởng những khoảnh khắc thú vị cùng với UnBlur nhé!
                </div>
                <div className=" text-beauty-bush text-[20px] font-bold text-robo mt-6">Chủ để</div>
                <div className="mt-4 overflow-hidden">
                    <Swiper
                        className="w-screen"
                        slidesPerView={3}
                        loop
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                    >
                        {topData.map((item) => (
                            <SwiperSlide key={item.id} className="!w-[60px]">
                                <img src={item.url} className="h-[60px] w-[60px] rounded-full overflow-hidden object-cover" />
                                <div className="text-[#8E929B] text-[15px] text-robo font-light">{item.title}</div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="mt-3 space-y-2">
                    <div className=" text-beauty-bush text-[20px] font-bold text-robo mt-6">Nổi bật</div>
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
    );
};

export default MainPage;
