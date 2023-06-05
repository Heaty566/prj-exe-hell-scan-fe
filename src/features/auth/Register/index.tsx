import { Button } from '@components/buttons';
import { InputField } from '@components/forms/InputField';
import { authApi, IV1AuthRegister } from '@core/api';
import { constant } from '@core/constant';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useStoreUser } from '@store/index';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, set, useForm } from 'react-hook-form';
import Cookies from 'universal-cookie';

import { SocialLogin } from '../SocialLogin';
import styles from './styles.module.css';

interface RegisterProps {}

const defaultValues: IV1AuthRegister = {
    confirmPassword: '',
    name: '',
    phone: '',
    password: '',
};

const Register: React.FunctionComponent<RegisterProps> = () => {
    const router = useRouter();

    const methods = useForm<IV1AuthRegister>({ defaultValues });
    const methodsOpt = useForm<{ opt: string }>({ defaultValues: { opt: '' } });

    const onSubmit = (data: IV1AuthRegister) => {
        setUser(data.phone);
        authApi.v1PostRegister(data).then((res) => {
            setToken(res);
            setIsVerify(true);
        });
    };

    const onSubmitOtp = ({ opt }: { opt: string }) => {
        if (opt.length === 6) {
            const cookies = new Cookies();
            cookies.set(constant.TOKEN_COOKIE_KEY, token);
            setIsVerify(false);
            setIsVerifyCode(true);
        }
    };

    const [user, setUser] = React.useState<string>('');
    const [token, setToken] = React.useState<string>('');
    const [isVerify, setIsVerify] = React.useState<boolean>(false);
    const [isVerifyCode, setIsVerifyCode] = React.useState<boolean>(false);

    return (
        <div className={clsx('relative z-10 flex flex-col items-center justify-center h-[calc(100vh)] fade-in', styles['bg'])}>
            {!isVerify && !isVerifyCode && (
                <>
                    <div className="absolute w-8 h-8 text-white cursor-pointer top-5 left-5" onClick={() => router.push('/auth/login')}>
                        <ChevronLeftIcon />
                    </div>

                    <p className="mb-5 text-base text-white">
                        Đăng ký <span className="font-bold uppercase">Đơn giản</span> thao tác <span className="font-bold uppercase">Dễ dàng</span>
                    </p>
                    <FormProvider {...methods}>
                        <form
                            onSubmit={methods.handleSubmit(onSubmit)}
                            className={clsx(
                                'w-[390px] shadow-md rounded-[10px] p-4  justify-center items-center flex-col gap-[30px] flex bg-[#F5D5D2]'
                            )}
                        >
                            <div className="flex flex-col w-full gap-4">
                                <InputField label="Email/SĐT" type="text" placeholder="Email/SĐT" name="phone" />
                                <InputField label="Tên người dùng" type="text" placeholder="Tên người dùng" name="name" />
                                <InputField label="Mật khẩu" type="password" placeholder="Mật khẩu" name="password" />
                                <InputField label="Nhập lại mật khẩu" type="password" placeholder="Nhập lại mật khẩu" name="confirmPassword" />
                            </div>

                            <Button label="Đăng kí" className="uppercase" type="submit" />
                        </form>
                    </FormProvider>

                    <div className="mt-5">
                        <SocialLogin />
                    </div>
                </>
            )}

            {isVerify && (
                <FormProvider {...methodsOpt}>
                    <form
                        onSubmit={methodsOpt.handleSubmit(onSubmitOtp)}
                        className={clsx('w-[390px] shadow-md rounded-[10px] p-4  justify-center items-center flex-col gap-[30px] flex bg-[#F5D5D2]')}
                    >
                        <p className="text-2xl font-bold text-gray-600 uppercase">Xác nhận bằng mã OTP</p>
                        <p className="text-base text-gray-500">
                            Một mã OTP gồm 6 chữ số đã được gửi đến {user.indexOf('@') >= 0 ? 'email' : 'số điện thoại'} {user} của bạn. Tuyệt đối
                            không cung cấp mã này cho bất kì ai để tránh bị đánh cắp thông tin
                        </p>
                        <div className="flex flex-col w-full gap-4">
                            <InputField label="" type="text" placeholder="Mã OTP" name="opt" />
                        </div>

                        <Button label="Xác nhận" className="uppercase" type="submit" />
                    </form>
                </FormProvider>
            )}

            {isVerifyCode && (
                <div className={clsx('w-[390px] shadow-md rounded-[10px] p-4  justify-center items-center flex-col gap-[30px] flex bg-[#F5D5D2]')}>
                    <p className="text-2xl font-bold text-gray-600 uppercase">Xác nhận thành công</p>
                    <div className="w-[108px] h-[108px]">
                        <img src="/assets/images/login/check.png" className="w-full h-full" alt="" />
                    </div>
                    <p className="text-base text-gray-500">
                        Chào mừng bạn đến với UnBlur, Hãy cùng tận hưởng những giây phút tuyệt vời cùng chúng tôi nhé!
                    </p>

                    <Button label="Xác nhận" className="uppercase" onClick={() => router.push('/main')} />
                </div>
            )}
        </div>
    );
};

export default Register;
