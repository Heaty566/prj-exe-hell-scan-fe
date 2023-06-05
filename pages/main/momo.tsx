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
                <div className="flex flex-col justify-center flex-1 mx-8 space-y-4 ">
                    <div>
                        <span className="text-[26px] text-[#443A3A] bg-[#FFBD59] px-5 rounded-[12px] py-2">Subscription</span>
                    </div>
                    <div className="bg-[#6A5851] px-6 py-10 rounded-2xl space-y-6 flex flex-col justify-center items-center">
                        <img src="/assets/images/login/payment.png" className=" w-[200px]" />
                        <div className="italic text-robo">
                            <div className="text-[16px] text-center">The subscription fee is 1$ per month</div>
                            <div className="mt-4 text-[12px]">The description in your transaction must be</div>
                            <div className="text-[18px] space-x-1">
                                <span className="text-white">“</span>
                                <span className="text-[#FFBD59]">
                                    MIH - your registered Email address
                                    <span className="text-[14px] ml-1">(without mail domain)</span>
                                </span>
                                <span className="text-white">”.</span>
                            </div>
                            <div className="text-white text-[12px] text-right">Ex: MIH - nguyenvana@gmail.com</div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default Momo;
