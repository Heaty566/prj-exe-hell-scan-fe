import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { userApi } from '@core/api';
import { useStoreUser } from '@store/index';

interface MomoProps {}

const Momo: React.FC<MomoProps> = () => {
    const [isOption, setIsOption] = React.useState(false);
    const router = useRouter();
    const { isPayment } = useStoreUser();

    const handleOption = async () => {
        const res = await userApi.v1PostDeposit(isOption ? 469000 : 49000, window.location.href);
        window.location.href = res.paymentUrl;
        console.log(res);
        // console.log(res.paymentUrl);
    };

    return (
        <div className="bg-[url('/assets/images/momo/bg.jpg')] relative z-10 flex flex-col overflow-y-scroll  h-[calc(100vh)] fade-in  items-center justify-center ">
            <div className="h-full p-3 m-4 momo-bg">
                <div className="relative">
                    <button className="absolute left-4 top-4" onClick={() => router.push('/main')}>
                        <img src="/assets/images/momo/out.png" />
                    </button>
                    <img src="/assets/images/momo/backend.png" className="h-[200px] w-full object-cover" alt="" />
                </div>
                <div className="text-[15px] text-robo mt-4">
                    <div className="text-[#8E929B] text-center font-bold">
                        Sử dụng độc quyền các tính năng nâng cao cùng bộ Presets màu siêu đỉnh của UnBlur ngay!
                    </div>
                    <div>
                        <div className="flex gap-2 mt-4 ">
                            <div className="w-2 h-2 bg-[#8E929B] rounded-full mt-1.5 shrink-0 "></div>
                            <div className="font-light text-[#8E929B]">100+ bộ Presets màu đỉnh cao theo chủ đề.</div>
                        </div>
                        <div className="flex gap-2 mt-1 ">
                            <div className="w-2 h-2 bg-[#8E929B] rounded-full mt-1.5  shrink-0"></div>
                            <div className="font-light text-[#8E929B]">50+ Template cho mọi trang mạng xã hội.</div>
                        </div>
                        <div className="flex gap-2 mt-1 ">
                            <div className="w-2 h-2 bg-[#8E929B] rounded-full mt-1.5  shrink-0"></div>
                            <div className="font-light text-[#8E929B]">Kích hoạt chứng năng chỉnh ảnh chuyên nghiệp với nhiều công cụ đỉnh cao.</div>
                        </div>
                        <div className="flex gap-2 mt-1 ">
                            <div className="w-2 h-2 bg-[#8E929B] rounded-full mt-1.5  shrink-0"></div>
                            <div className="font-light text-[#8E929B]">Không quảng cáo.</div>
                        </div>
                        <div className="flex gap-2 mt-1 ">
                            <div className="w-2 h-2 bg-[#8E929B] rounded-full mt-1.5  shrink-0"></div>
                            <div className="font-light text-[#8E929B]">Ưu tiên thử nghiệm các tính năng mới.</div>
                        </div>
                    </div>
                </div>
                {!isPayment && (
                    <>
                        <button
                            onClick={() => setIsOption(true)}
                            className={clsx(
                                'mt-4 px-4 py-2 h-[61px] text-[15px] font-medium text-robo text-[#8E929B]  w-full rounded-[10px] flex  items-center',
                                {
                                    'bg-white': isOption,
                                }
                            )}
                        >
                            <div>
                                <div
                                    className={clsx(' border h-4 w-4 rounded-full border-[#8E929B]', {
                                        'bg-[#ECB7B3]': isOption,
                                    })}
                                ></div>
                            </div>
                            <div className="pr-4 ml-4 border-r border-[#8E929B]">
                                Mỗi năm 469.000 đ <br />
                                (39.000 đ/tháng)
                            </div>
                            <div className="pl-3">SIÊU TIẾT KIỆM</div>
                        </button>
                        <button
                            onClick={() => setIsOption(false)}
                            className={clsx(
                                'mt-4 w-full px-4 py-2 h-[61px] text-[15px] font-medium text-robo text-[#8E929B]  rounded-[10px] flex  items-center',
                                {
                                    'bg-white': !isOption,
                                }
                            )}
                        >
                            <div>
                                <div
                                    className={clsx(' border h-4 w-4 rounded-full border-[#8E929B]', {
                                        'bg-[#ECB7B3]': !isOption,
                                    })}
                                ></div>
                            </div>
                            <div className="pr-4 ml-4 ">49.000 đ/tháng</div>
                        </button>
                    </>
                )}
                {isPayment && (
                    <>
                        <div className="flex items-center justify-center mt-4 text-[#8E929B]">Gói của bạn vẫn còn hạn sử dụng</div>
                    </>
                )}
                <div className="flex items-center justify-center mt-4">
                    <button
                        className="bg-[#ECB7B3] shadow-lg rounded-[10px] text-robo font-semibold px-6 py-2"
                        onClick={() => {
                            if (isPayment) {
                                router.push('/main');
                                return;
                            }
                            handleOption();
                        }}
                    >
                        TIẾP TỤC
                    </button>
                </div>
                <div className="font-light text-[#8E929B] text-[15px] text-center text-robo mt-4">
                    Không tự động gia hạn. Đến hạn sẽ thông báo và bạn có thể lựa chọn có nên tiếp tục gói hay không
                </div>
            </div>
        </div>
    );
};

export default Momo;
