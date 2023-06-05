import Menu2Icon from '@components/icons/menu2';
import Menu4Icon from '@components/icons/menu4';
import MainLayout from '@components/layouts/MainLayout';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

interface AccountPageProps {}

const firstSwiper = [
    {
        name: 'Chủ đề',
        images: [
            '/assets/images/highlight/topic-1.png',
            '/assets/images/highlight/topic-2.png',
            '/assets/images/highlight/topic-3.png',
            '/assets/images/highlight/topic-4.png',
            '/assets/images/highlight/topic-5.png',
            '/assets/images/highlight/topic-6.png',
            '/assets/images/highlight/topic-7.png',
        ],
    },
    {
        name: 'Youtube',
        images: [
            '/assets/images/highlight/youtube-1.png',
            '/assets/images/highlight/youtube-2.png',
            '/assets/images/highlight/youtube-3.png',
            '/assets/images/highlight/youtube-4.png',
            '/assets/images/highlight/youtube-5.png',
            '/assets/images/highlight/youtube-6.png',
            '/assets/images/highlight/youtube-7.png',
            '/assets/images/highlight/youtube-8.png',
        ],
    },
    {
        name: 'Instagram',
        images: [
            '/assets/images/highlight/instagram-7.png',
            '/assets/images/highlight/instagram-8.png',
            '/assets/images/highlight/instagram-3.png',
            '/assets/images/highlight/instagram-4.png',
            '/assets/images/highlight/instagram-5.png',
            '/assets/images/highlight/instagram-6.png',
            '/assets/images/highlight/instagram-7.png',
            '/assets/images/highlight/instagram-8.png',
        ],
    },
];

const secondSwiper = [
    {
        name: 'Pinterest',
        images: [
            '/assets/images/highlight/pinterest-7.png',
            '/assets/images/highlight/pinterest-8.png',
            '/assets/images/highlight/pinterest-5.png',
            '/assets/images/highlight/pinterest-3.png',
            '/assets/images/highlight/pinterest-4.png',
            '/assets/images/highlight/pinterest-5.png',
            '/assets/images/highlight/pinterest-6.png',
            '/assets/images/highlight/pinterest-7.png',
            '/assets/images/highlight/pinterest-8.png',
        ],
    },
];

const AccountPage: React.FC<AccountPageProps> = () => {
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
                <div className="px-4 pt-8">
                    <div className=" text-beauty-bush text-[24px] font-bold text-robo ">Nội dung phổ biến</div>
                    <div className="text-[#8E929B] text-[15px] font-light text-robo mt-1 leading-[150%]">
                        Thoải mái sáng tạo cùng hàng trăm nội dung thú vị, Phổ biến trên khắp các nền tảng mạng xã hội
                    </div>
                    {firstSwiper.map((item) => (
                        <div key={item.name} className="mt-3 space-y-2">
                            <div className=" text-beauty-bush text-[20px] font-bold text-robo mt-6">{item.name}</div>
                            <div className="flex space-x-5">
                                <Swiper slidesPerView={2} spaceBetween={20} className="h-48">
                                    {item.images.map((image) => (
                                        <SwiperSlide key={image}>
                                            <div className="space-y-4">
                                                <div>
                                                    <img src={image} />
                                                </div>

                                                <div className="flex space-x-4">
                                                    <div className="rounded-[10px] bg-white shadow-cs w-[36px] h-[36px] flex items-center justify-center">
                                                        <img src="/assets/images/highlight/figure.png" />
                                                    </div>
                                                    <div className="flex-1 text-center button-cs h-[36px] leading-[36px] text-robo font-bold">
                                                        SỬ DỤNG
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    ))}
                    {/* =========================== */}
                    {secondSwiper.map((item) => (
                        <div className="mt-3 space-y-2" key={item.name}>
                            <div className=" text-beauty-bush text-[20px] font-bold text-robo mt-6">Pinterest</div>

                            <Swiper slidesPerView={2} spaceBetween={20} className="h-72">
                                {item.images.map((image) => (
                                    <SwiperSlide key={image}>
                                        <div className="space-y-4">
                                            <div>
                                                <img src={image} />
                                            </div>
                                            <div className="flex space-x-4">
                                                <div className="rounded-[10px] bg-white shadow-cs w-[36px] h-[36px] flex items-center justify-center">
                                                    <img src="/assets/images/highlight/figure.png" />
                                                </div>
                                                <div className="flex-1 text-center button-cs h-[36px] leading-[36px] text-robo font-bold">
                                                    SỬ DỤNG
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    ))}

                    {/* ====================== */}
                    <div className="mt-3 space-y-2">
                        <div className=" text-beauty-bush text-[20px] font-bold text-robo mt-6">Được sử dụng nhiều nhất</div>
                        <div className="flex ">
                            <div className="space-y-4">
                                <div>
                                    <img src="/assets/images/highlight/popular-1.png" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-beauty-bush-500"></div>
                            <div className="w-3 h-3 rounded-full bg-beauty-bush-400"></div>
                            <div className="w-3 h-3 rounded-full bg-beauty-bush-400"></div>
                            <div className="w-3 h-3 rounded-full bg-beauty-bush-400"></div>
                            <div className="w-3 h-3 rounded-full bg-beauty-bush-400"></div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default AccountPage;
