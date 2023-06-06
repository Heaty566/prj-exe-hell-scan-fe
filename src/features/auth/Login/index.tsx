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
import MainLayout from '@components/layouts/MainLayout';

interface LoginProps {}

const defaultValues: IV1AuthLogin = {
    password: '',
    phone: '',
};

const Login: React.FunctionComponent<LoginProps> = () => {
    const router = useRouter();

    const methods = useForm<IV1AuthLogin>({ defaultValues });

    const onSubmit = (data: IV1AuthLogin) => {
        router.push('/main');
        authApi.v1PostLogin(data).then((res) => {
            const cookies = new Cookies();
            cookies.set(constant.TOKEN_COOKIE_KEY, res);
            router.push('/main');
        });
    };

    return (
        <>
            <MainLayout>
                <div className="flex flex-col justify-center flex-1 space-y-4">
                    <div>
                        <span className="text-[26px] text-[#443A3A] bg-[#FFBD59] px-5 rounded-[12px] py-2">Login</span>
                    </div>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)} className="bg-[#675853] min-w-[320px] space-y-8  px-6 py-9 rounded-[12px]">
                            <InputField label="Email" type="text" placeholder="Email" name="phone" />
                            <InputField label="Password" type="password" placeholder="Password" name="password" />

                            <button className="bg-[#FFBD59] text-[26px] w-full rounded-[8px] text-[#443A3A] py-1">LOGIN</button>
                        </form>
                    </FormProvider>
                </div>
            </MainLayout>
        </>
    );
};

export default Login;
