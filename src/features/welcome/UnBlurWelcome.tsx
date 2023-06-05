import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';
import Draggable from 'react-draggable';

import styles from './styles.module.css';

interface UnBlurWelcomeProps {}

const UnBlurWelcome: React.FunctionComponent<UnBlurWelcomeProps> = () => {
    const [testDemo, setTestDemo] = React.useState<boolean>(false);

    const [deltaPosition, setDeltaPosition] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const handleDrag = (e: any, ui: any) => {
        const { x, y } = deltaPosition;
        setDeltaPosition({
            x: x + ui.deltaX,
            y: y + ui.deltaY,
        });
    };

    // const [x, setX] = React.useState<number>(0);

    // React.useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (x >= 260) {
    //             setX(0);
    //             return;
    //         }

    //         setX((prev) => (prev <= 270 ? prev + 5 : 0));
    //     }, 100);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);

    const router = useRouter();

    return (
        <div className={clsx('flex flex-col justify-center items-center h-[calc(100vh)] px-3', styles['bg'])}>
            <div
                className={clsx('flex flex-col items-center justify-end w-full fade-in', {
                    hidden: testDemo,
                })}
            >
                <h1 className="text-[32px] text-white font-semibold">Chào mừng bạn đến với</h1>
                <div className="h-[120px] w-[120px]">
                    <img src="/assets/images/welcome/logo.png" alt="" className="w-full h-full" />
                </div>
                <p className="mb-5 text-2xl font-light text-white">Tăng chất lượng ảnh chụp</p>
                <img alt="" className="object-cover w-auto h-80" src="/assets/images/welcome/blur-img.png" />
                <button
                    onClick={() => setTestDemo(true)}
                    className="mt-5 p-2 text-white bg-beauty-bush w-[274px] uppercase text-2xl rounded-[10px] font-semibold"
                >
                    Khám phá ngay
                </button>
            </div>

            <div
                className={clsx('flex flex-col items-center justify-between h-full py-4 fade-in', {
                    hidden: !testDemo,
                })}
            >
                <div className="w-20">
                    <img src="/assets/images/welcome/logo.png" alt="" className="w-full h-full" />
                </div>
                <div className={clsx('flex justify-center items-center w-[272px] h-[400px] ', styles['bg-img'])}>
                    <div className="relative w-full h-96">
                        {/* <img
                                alt=""
                                className="absolute top-0 object-cover w-auto h-full -translate-x-1/2 left-1/2"
                                src="/assets/images/welcome/blur-img.png"
                            /> */}
                        <img
                            alt=""
                            className="absolute top-0 object-cover w-auto h-full -translate-x-1/2 left-1/2"
                            src="/assets/images/welcome/blur-img.png"
                        />
                        {/* <div className="absolute top-0 right-0 h-full -translate-x-1 bg-red-400"></div> */}
                        <div className="absolute top-0 left-0 h-full overflow-hidden " style={{ width: deltaPosition.x }}>
                            <img
                                alt=""
                                className={clsx('absolute top-0 object-left  object-cover left-0 z-10 max-w-[262px] h-[384px] ')}
                                src="/assets/images/welcome/clean-img.png"
                            />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[calc(100%+76px)] ">
                            <Draggable
                                axis="x"
                                bounds="parent"
                                defaultClassName="overflow-visible relative "
                                defaultPosition={{ x: 74, y: 0 }}
                                onDrag={handleDrag}
                            >
                                <div className="-left-[70px]  w-[80px]  h-[80px] absolute z-20 translate-y-1 top-1/2">
                                    <img className="w-full h-full" alt="" src="/assets/images/welcome/drag-dot.png" />
                                </div>
                            </Draggable>
                        </div>
                        <div className={clsx('w-2 h-full absolute top-0  z-9999 ', styles['line'])} style={{ left: deltaPosition.x }}></div>
                    </div>
                </div>
                <div className="flex flex-col items-start w-full">
                    <div>
                        <img src="/assets/images/welcome/unblur.png" alt="" />
                    </div>
                    <p className="w-full text-base font-light text-white">
                        Tăng cường những bức ảnh cũ và mờ, tối ưu hóa thông tin chi tiết của khuôn mặt.
                    </p>
                </div>
                <button
                    onClick={() => router.push('/auth/login')}
                    className=" p-2 text-white bg-beauty-bush w-[274px] uppercase text-2xl rounded-[10px] font-semibold"
                >
                    Tiếp tục
                </button>
            </div>
        </div>
    );
};

export default UnBlurWelcome;
