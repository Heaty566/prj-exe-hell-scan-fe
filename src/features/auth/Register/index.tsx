import { InputField } from '@components/forms/InputField';
import { authApi, IV1AuthRegister } from '@core/api';
import { constant } from '@core/constant';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Cookies from 'universal-cookie';

import MainLayout from '@components/layouts/MainLayout';
import Link from 'next/link';
import { toast } from 'react-toastify';

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

    const onSubmit = (data: IV1AuthRegister) => {
        authApi
            .v1PostRegister(data)
            .then((res) => {
                const cookies = new Cookies();
                cookies.set(constant.TOKEN_COOKIE_KEY, res);
                router.push('/main');
            })
            .catch((err) => {
                toast.error('Email already exists.');
            });
    };

    return (
        <>
            <MainLayout>
                <div className="flex flex-col justify-center flex-1 space-y-4">
                    <div>
                        <span className="text-[26px] text-[#443A3A] bg-[#FFBD59] px-5 rounded-[12px] py-2">Register</span>
                    </div>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)} className="bg-[#675853] min-w-[320px] space-y-8  px-6 py-9 rounded-[12px]">
                            <InputField label="Email" type="text" placeholder="Email" name="phone" />
                            <InputField label="Name" type="text" placeholder="Name" name="name" />
                            <InputField label="Password" type="password" placeholder="Password" name="password" />
                            <InputField label="Confirm password" type="password" placeholder="Confirm password" name="confirmPassword" />
                            <div className="space-y-1">
                                <button className="bg-[#FFBD59] text-[26px] w-full rounded-[8px] text-[#443A3A] py-1">Register</button>
                                <Link href={'/auth/login'}>
                                    <div className="text-center text-gray-300">Login Instead</div>
                                </Link>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </MainLayout>
        </>
    );
};

export default Register;
