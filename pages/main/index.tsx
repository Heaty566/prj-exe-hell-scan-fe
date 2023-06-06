import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { userApi } from '@core/api';
import { useStoreUser } from '@store/index';
import MainLayout from '@components/layouts/MainLayout';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface MomoProps {}

const Momo: React.FC<MomoProps> = () => {
    return (
        <>
            <MainLayout>
                <div className="flex flex-col justify-center flex-1 space-y-4 ">
                    <div className="overflow-hidden rounded-b-lg rounded-tr-3xl">
                        <div className="flex h-[220px] relative ">
                            <div className="absolute right-2 top-2">
                                <Link href="/main/render">
                                    <button className="text-[26px] text-[#443A3A] bg-[#FFBD59] px-6 rounded-[12px] py-1 flex flex-col">
                                        <span className="text-[12px]">Try it</span>
                                        <div className="flex items-center justify-center">
                                            <span className="text-[20px]">Now</span>
                                            <ChevronRightIcon className="w-4 h-4" />
                                        </div>
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <img src="/assets/images/login/banner.png" className="h-full" />
                            </div>
                            <div className="flex-1 w-full">
                                <img src="/assets/images/login/ani.gif" className="w-full h-full" />
                            </div>
                        </div>
                        <div className="bg-[#FFBD59] h-4"></div>
                    </div>
                    <div className="mx-4">
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
                                <Link href="/main/momo">
                                    <div className="absolute right-3 -bottom-3">
                                        <span className="text-[14px] text-[#443A3A] bg-[#FFBD59] px-2 rounded-[12px] py-1">Subscribe</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default Momo;
