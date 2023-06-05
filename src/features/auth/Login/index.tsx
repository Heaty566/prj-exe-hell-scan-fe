import { Button } from '@components/buttons';
import { InputField } from '@components/forms/InputField';
import { authApi, IV1AuthLogin } from '@core/api';
import { constant } from '@core/constant';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Cookies from 'universal-cookie';

import { SocialLogin } from '../SocialLogin';

interface LoginProps {}

const defaultValues: IV1AuthLogin = {
    password: '',
    phone: '',
};

const Login: React.FunctionComponent<LoginProps> = () => {
    const router = useRouter();

    const methods = useForm<IV1AuthLogin>({ defaultValues });

    const onSubmit = (data: IV1AuthLogin) => {
        authApi.v1PostLogin(data).then((res) => {
            const cookies = new Cookies();
            cookies.set(constant.TOKEN_COOKIE_KEY, res);
            router.push('/main');
        });
    };

    return (
        <>
            <div className="max-h-[calc(100vh)]">
                <div className="absolute top-0 left-0 w-full h-full fade-in">
                    <img src="/assets/images/login/bg.jpg" className="object-cover object-top w-full h-full" alt="" />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh)]">
                    <div className="absolute w-8 h-8 text-white cursor-pointer top-5 left-5" onClick={() => router.push('/')}>
                        <ChevronLeftIcon />
                    </div>
                    <div className="h-[120px] w-[120px]">
                        <img src="/assets/images/welcome/logo.png" alt="" className="w-full h-full" />
                    </div>
                    <p className="max-w-[282px] w-full text-white text-base text-center mb-6">
                        Cùng lưu lại những khoảnh khắc thú vị với UnBlur nhé!
                    </p>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-[390px] justify-center items-center flex-col gap-4 flex  px-4">
                            <InputField label="Email/SĐT" type="text" placeholder="Email/SĐT" name="phone" />
                            <InputField label="Mật khẩu" type="password" placeholder="Mật khẩu" name="password" />

                            <Button label="Đăng nhập" type="submit" />
                        </form>
                    </FormProvider>
                    <Link href={'/auth/forget-password'}>
                        <p className="mt-4 text-base italic font-light text-white underline cursor-pointer">Quên mật khẩu ?</p>
                    </Link>
                    <p className="mt-4 text-base text-white">
                        Nếu bạn chưa có tài khoản{' '}
                        <Link href={'/auth/register'}>
                            <span className="underline uppercase">Đăng ký</span>
                        </Link>
                    </p>
                    <div className="mt-6">
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
