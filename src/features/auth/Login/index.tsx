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
                <div className="relative z-10 flex flex-col items-center  h-[calc(100vh)]">
                    <div className="bg-[#FFBD59] relative w-full pl-20">
                        <div>Make it Home</div>
                        <img src="/assets/images/login/logo.png" className="absolute top-0 z-50 object-cover object-top h-16 left-4" alt="" />
                    </div>
                    <div className="flex flex-col justify-center flex-1 mt-12 space-y-4">
                        <div>
                            <span className="text-[26px] text-[#443A3A] bg-[#FFBD59] px-5 rounded-[12px] py-2">Login</span>
                        </div>
                        <FormProvider {...methods}>
                            <form
                                onSubmit={methods.handleSubmit(onSubmit)}
                                className="bg-[#675853] min-w-[320px] space-y-8  px-6 py-9 rounded-[12px]"
                            >
                                <InputField label="Email/SĐT" type="text" placeholder="Email" name="phone" />
                                <InputField label="Mật khẩu" type="password" placeholder="Mật khẩu" name="password" />

                                <button className="bg-[#FFBD59] text-[26px] w-full rounded-[8px] text-[#443A3A] py-1">LOGIN</button>
                            </form>
                        </FormProvider>
                    </div>
                    <div className="bg-[#443A3A] relative w-full pl-20 h-6">
                        <button className="bg-[#FFBD59] text-[18px] rounded-[8px] text-[#443A3A] py-1 absolute bottom-4 right-4 px-4">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
