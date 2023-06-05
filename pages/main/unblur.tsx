// @ts-ignore
// @ts-nocheck
import MainLayout from '@components/layouts/MainLayout';
import { fileApi } from '@core/api/file.api';
import { ChevronLeftIcon, StarIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { StarIcon as UnStarIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import _get from 'lodash/get';
import { toast } from 'react-toastify';
import { InputField } from '@components/forms/InputField';
import { Button } from '@components/buttons';
import { routes } from '@core/routes';
import { store, useStoreUser } from '@store/index';
import { userActions } from '@store/user';

interface UploadImageDto {
    image: string;
}

const defaultValues: UploadImageDto = {
    image: '',
};

interface AccountPageProps {}

const AccountPage: React.FC<AccountPageProps> = () => {
    const router = useRouter();
    const image = React.useRef<HTMLImageElement>(null);
    const input = React.useRef<HTMLInputElement>(null);
    const userStore = useStoreUser();

    const [isLoaded, setIsLoaded] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const [imageSrc, setImageSrc] = React.useState('');

    const handleUnUnblur = async () => {
        if (!image?.current?.src) {
            toast.error('Vui lòng chọn ảnh');
            return;
        }
        setIsLoaded(true);

        try {
            const data = await fileApi.v1Blur(image?.current?.src);
            setIsSuccess(true);
            const newUrl = _get(data, 'url', '');
            image.current?.setAttribute('src', newUrl);
            setImageSrc(newUrl);
            store.dispatch(userActions.autoLogin());
        } catch (error) {
            toast.error('Bạn đã hết lượt dùng thử');
            router.push('/main/momo');
        } finally {
            setIsLoaded(false);
        }
    };

    const [isReview, setIsReview] = React.useState(false);
    const [isRated, setIsRated] = React.useState(false);
    const [rated, setRated] = React.useState(0);

    const handleRating = (rate: number) => {
        setRated(rate);
        setIsRated(true);
    };

    const methods = useForm();

    const onSubmit = (values: any) => {
        console.log(values);

        setIsSubmitted(true);
    };

    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleClose = () => {
        setIsReview(false);
        setIsSubmitted(false);
        setIsRated(false);
        router.push('/main');
    };

    return (
        <>
            <div className="max-h-[calc(100vh)] bg-cs h-screen fade-in">
                {isLoaded && (
                    <div className="absolute z-50 flex items-center justify-center w-screen h-screen bg-gray-600/30">
                        <img src="/assets/images/scan/loading.png" className="spin" />
                    </div>
                )}
                {!isReview ? (
                    <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh)]">
                        <div className="absolute w-8 h-8 text-white cursor-pointer top-5 left-5" onClick={() => router.push('/main')}>
                            <ChevronLeftIcon />
                        </div>
                        <button
                            onClick={() => {
                                input?.current?.click();
                            }}
                            className="w-full"
                        >
                            <div className="px-4 pt-12 mx-4 bg-border-cs rounded-[10px] pb-5 relative ">
                                {!isLoaded && !isSuccess && (
                                    <>
                                        <div className="absolute z-0 text-gray-600 transform -translate-x-1/2 left-1/2 top-1/2">
                                            <div>Nhấp để chọn ảnh</div>
                                            {!userStore.isPayment && <div>Còn {userStore.limitPhoto} lượt miễn phí</div>}
                                        </div>
                                    </>
                                )}
                                <img ref={image} className="w-full relative z-10 min-w-full  h-[500px]  object-cover" />

                                <input
                                    ref={input}
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={async (e) => {
                                        const file = e?.target?.files[0];
                                        const ew = await fileApi.v1PostUpload(file);
                                        if (image?.current) {
                                            image.current.setAttribute('src', ew);
                                        }
                                    }}
                                />
                            </div>
                        </button>
                        <div className="flex justify-around w-full gap-8 mt-4">
                            {isSuccess ? (
                                <>
                                    <button onClick={() => setIsReview(true)} className="flex flex-col items-center justify-center gap-1 ">
                                        <img src="/assets/images/scan/rate.png" />
                                        <div>Đánh giá</div>
                                    </button>

                                    <a
                                        rel="noreferrer"
                                        href={imageSrc}
                                        download={`${new Date().getTime()}`}
                                        className="flex flex-col items-center justify-center gap-1 "
                                        target="_blank"
                                    >
                                        <img src="/assets/images/scan/download.png" />
                                        <div>Lưu ảnh</div>
                                    </a>

                                    <button
                                        onClick={() => {
                                            toast.warn('Tính năng đang được phát triển');
                                        }}
                                        className="flex flex-col items-center justify-center gap-1 "
                                    >
                                        <img src="/assets/images/scan/sticker.png" />
                                        <div>Chia sẻ</div>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button onClick={handleUnUnblur} className="flex flex-col items-center justify-center gap-0 ">
                                        <img src="/assets/images/scan/unblur.png" />
                                        <div className="text-lg">Làm rõ</div>
                                    </button>
                                    {/* <button
                                        onClick={() => {
                                            toast.warn('Tính năng đang được phát triển');
                                        }}
                                        className="flex flex-col items-center justify-center gap-1 "
                                    >
                                        <img src="/assets/images/scan/edit.png" />
                                        <div>Chỉnh ảnh</div>
                                    </button>
                                    <button
                                        onClick={() => {
                                            toast.warn('Tính năng đang được phát triển');
                                        }}
                                        className="flex flex-col items-center justify-center gap-1 "
                                    >
                                        <img src="/assets/images/scan/sticker.png" />
                                        <div>Sticker</div>
                                    </button> */}
                                </>
                            )}
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="px-4 mx-4  pt-3 h-full bg-border-cs rounded-[10px] relative flex flex-col pb-5 justify-start items-center ">
                            <div className="absolute w-5 h-5 text-gray-700 top-6 left-6" onClick={() => handleClose()}>
                                <XMarkIcon />
                            </div>
                            <div className="h-[120px] w-[120px] my-10 flex-shrink-0">
                                <img src="/assets/images/welcome/logo.png" alt="" className="w-full h-full" />
                            </div>
                            {!isSubmitted ? (
                                <>
                                    <div className="flex flex-col items-center justify-center w-full gap-6 mb-16 text-center">
                                        <p className="text-2xl font-bold leading-7 text-gray-600 uppercase">Đánh giá chất lượng ảnh</p>
                                        <p className="text-base text-center text-gray-600 ">
                                            UnBlur là một ứng dụng chỉnh sửa ảnh với công nghệ AI tiên tiến. Vì dự án đang trong quá trình phát triển
                                            và hoàn thiện, hãy cho chúng tôi biết mức độ hài lòng của bạn về chất lượng bức ảnh đã qua chỉnh sửa,
                                            chúng tôi sẽ cố gắng hoàn thiện hơn trong tương lai.
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex gap-7 text-[#ECB7B3]">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <div className="w-8 h-8" key={`star-${index}`} onClick={() => handleRating(index + 1)}>
                                                    {rated > index ? <StarIcon /> : <UnStarIcon />}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <FormProvider {...methods}>
                                        <form
                                            onSubmit={methods.handleSubmit(onSubmit)}
                                            className="flex flex-col items-center justify-center w-full gap-10 mt-7"
                                        >
                                            <InputField label="" type="text" placeholder="Mô tả trải nghiệm của bạn" name="content" />

                                            {isRated && <Button label="Đánh giá" className="uppercase" type="submit" />}
                                        </form>
                                    </FormProvider>
                                </>
                            ) : (
                                <>
                                    <div className="flex flex-col items-center justify-center w-full gap-6 mb-6 mt-[112px] text-center">
                                        <p className="text-2xl font-bold leading-7 text-gray-600 uppercase">CẢM ƠN BẠN ĐÃ ĐÁNH GIÁ</p>
                                        <p className="text-base text-center text-gray-600 ">
                                            UnBlur rất vui khi nhận được những phản hồi tích cực từ bạn. Chúc bạn có những trả nghiệm đánh nhớ cùng
                                            chúng tôi.
                                        </p>
                                    </div>
                                    <Button label="Đóng" className="uppercase" onClick={() => handleClose()} />
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default AccountPage;
