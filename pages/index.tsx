import UnBlurWelcome from '@features/welcome/UnBlurWelcome';
import _get from 'lodash.get';
import { NextPage } from 'next';
import * as React from 'react';

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
    return <UnBlurWelcome />;
};

export default HomePage;
