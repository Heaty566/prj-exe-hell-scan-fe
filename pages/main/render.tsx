//@ts-ignore
//@ts-nocheck
import MainLayout from '@components/layouts/MainLayout';
import { userApi } from '@core/api';
import { fileApi } from '@core/api/file.api';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import * as React from 'react';

interface MomoProps {}

const Momo: React.FC<MomoProps> = () => {
    const imageObjRef = React.useRef<HTMLImageElement>(null);
    const imageBgRef = React.useRef<HTMLImageElement>(null);
    const imageResultRef = React.useRef<HTMLImageElement>(null);
    const input = React.useRef<HTMLInputElement>(null);
    const input2 = React.useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleScan = async () => {
        if (imageObjRef?.current && imageBgRef?.current) {
            setIsLoading(true);
            const res = await userApi.v1Scan(imageObjRef.current.src, imageBgRef.current.src);
            setIsLoading(false);
            if (imageResultRef?.current) {
                imageResultRef.current.setAttribute('src', res);
            }
        }
    };

    return (
        <>
            <MainLayout>
                <div className="flex flex-col justify-center flex-1 mx-4 space-y-4 ">
                    <div>
                        <span className="text-[14px] text-[#443A3A] bg-[#FFBD59] px-2 rounded-[12px] py-1">Add Images</span>
                    </div>
                    <input
                        ref={input}
                        type="file"
                        name="image"
                        accept="image/*"
                        className="hidden"
                        onChange={async (e) => {
                            const file = e?.target?.files[0];
                            const ew = await fileApi.v1PostUpload(file);
                            if (imageObjRef?.current) {
                                imageObjRef.current.setAttribute('src', ew);
                            }
                        }}
                    />

                    <input
                        ref={input2}
                        type="file"
                        name="image"
                        accept="image/*"
                        className="hidden"
                        onChange={async (e) => {
                            const file = e?.target?.files[0];
                            const ew = await fileApi.v1PostUpload(file);
                            if (imageBgRef?.current) {
                                imageBgRef.current.setAttribute('src', ew);
                            }
                        }}
                    />
                    <div className="space-y-8">
                        <div className="bg-[#6A5851] pt-4 pb-6 px-4  rounded-2xl space-y-6 flex flex-col justify-center items-center relative">
                            <div className="flex space-x-4">
                                <div className="flex-1">
                                    <img
                                        onClick={() => {
                                            input?.current?.click();
                                        }}
                                        ref={imageObjRef}
                                        src="/assets/images/login/place-1.png"
                                    />
                                </div>
                                <div className="flex-1">
                                    <img
                                        onClick={() => {
                                            input2?.current?.click();
                                        }}
                                        ref={imageBgRef}
                                        src="/assets/images/login/place-2.png"
                                    />
                                </div>
                            </div>
                            <div className="absolute right-4 -bottom-5">
                                <button
                                    onClick={() => {
                                        handleScan();
                                    }}
                                    className="text-[20px] text-[#443A3A] bg-[#FFBD59] px-2 rounded-[12px] py-1"
                                >
                                    Render
                                </button>
                            </div>
                        </div>
                        <div className="bg-[#6A5851] pt-4 pb-6 px-4  rounded-2xl space-y-6 flex flex-col justify-center items-center relative">
                            <div className="flex space-x-4">
                                {isLoading && <ArrowPathIcon className="w-24 h-24 text-white animate-spin" />}
                                <div className={isLoading ? 'hidden' : ''}>
                                    <img ref={imageResultRef} src="/assets/images/login/place.png" className="max-h-[300px] object-cover" />
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
