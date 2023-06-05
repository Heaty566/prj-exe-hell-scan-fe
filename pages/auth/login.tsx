import { AutoLoginWrapper, UnProtectWrapper } from '@components/wrappers';
import Login from '@features/auth/Login';
import { NextPage } from 'next';
import * as React from 'react';
interface LoginPageProps {
    token: string;
}

const LoginPage: NextPage<LoginPageProps> = ({}) => {
    return <Login />;
};

export default LoginPage;
