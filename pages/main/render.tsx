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
                        <span className="text-[14px] text-[#443A3A] bg-[#FFBD59] px-2 rounded-[12px] py-1">Add Images</span>
                    </div>
                    <div className="space-y-8">
                        <div className="bg-[#6A5851] pt-4 pb-6 px-4  rounded-2xl space-y-6 flex flex-col justify-center items-center relative">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="/assets/images/login/place-1.png" />
                                </div>
                                <div>
                                    <img src="/assets/images/login/place-2.png" />
                                </div>
                            </div>
                            <div className="absolute right-4 -bottom-5">
                                <span className="text-[20px] text-[#443A3A] bg-[#FFBD59] px-2 rounded-[12px] py-1">Render</span>
                            </div>
                        </div>
                        <div className="bg-[#6A5851] pt-4 pb-6 px-4  rounded-2xl space-y-6 flex flex-col justify-center items-center relative">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="/assets/images/login/place.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default Momo;
