import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { userApi } from '@core/api';
import { useStoreUser } from '@store/index';
import MainLayout from '@components/layouts/MainLayout';

interface MomoProps {}

const Momo: React.FC<MomoProps> = () => {
    return (
        <>
            <MainLayout>
                <div className="flex flex-col justify-center flex-1 mx-4 space-y-4 ">
                    <div>
                        <span className="text-[26px] text-[#443A3A] bg-[#FFBD59] px-5 rounded-[12px] py-2">Subscription</span>
                    </div>
                    <div className="bg-[#5E5151] bg-opacity-70 px-2 py-2 rounded-2xl text-[14px]">
                        <div className="text-[#FFBD59]">Make it Home</div>
                        <div className="font-thin text-white">
                            We help you visualize how your room would look like, just by providing us an image of furniture
                        </div>
                    </div>
                    <div className="  rounded-2xl text-[14px] flex gap-4">
                        <img src="/assets/images/login/scan.png" className=" w-[150px] object-cover" />
                        <div className="relative flex-1">
                            <div className="bg-[#FFBD59] text-[18px] px-2 rounded-xl">Offers</div>
                            <div className="bg-[#5E5151] bg-opacity-70 rounded-xl px-2 py-4 space-y-4">
                                <div>
                                    <div className="text-[13px] text-[#FFBD59]">Free</div>
                                    <div className="ml-4">
                                        <div className="dot">render up to 10 images</div>
                                        <div className="dot">queue for using</div>
                                        <div className="dot">queue for supporting</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[13px] text-[#FFBD59]">Subscription</div>
                                    <div className="ml-4">
                                        <div className="dot">render up to 300 images</div>
                                        <div className="dot">NO queue</div>
                                        <div className="dot">24/24 support</div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute right-3 -bottom-3">
                                <span className="text-[14px] text-[#443A3A] bg-[#FFBD59] px-2 rounded-[12px] py-1">Subscribe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default Momo;
