import UnBlurWelcome from '@features/welcome/UnBlurWelcome';
import _get from 'lodash.get';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
    const router = useRouter();
    React.useEffect(() => {
        router.push('/auth/login');
    }, []);

    return <></>;
};

export default HomePage;
