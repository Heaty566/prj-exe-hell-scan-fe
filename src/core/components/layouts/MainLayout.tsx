import { Menu1Icon } from '@components/icons/menu1';
import Menu2Icon from '@components/icons/menu2';
import Menu3Icon from '@components/icons/menu3';
import Menu4Icon from '@components/icons/menu4';
import Menu5Icon from '@components/icons/menu5';
import { useStoreUser } from '@store/index';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const router = useRouter();

    return (
        <div className={clsx('relative z-10 flex flex-col overflow-y-scroll  pb-28 h-[calc(100vh)] fade-in bg-white ')}>
            {children}
            <div className="bg-[#8E929B] px-11 fixed bottom-0 left-0 w-full z-[9999]">
                <div className="flex items-center justify-between h-20">
                    <Link href={'/main'}>
                        <a>
                            <Menu1Icon fill={router.pathname === '/main' ? '#ECB7B3' : '#fff'} />
                        </a>
                    </Link>
                    <Link href={'/main/highlight'}>
                        <a>
                            <Menu2Icon fill={router.pathname === '/main/highlight' ? '#ECB7B3' : '#fff'} />
                        </a>
                    </Link>
                    <Link href={'/main/unblur'}>
                        <a className="p-2 rounded-full shadow-xl bg-beauty-bush-500">
                            <Menu3Icon fill={'#fff'} />
                        </a>
                    </Link>
                    <Link href={'/main/love'}>
                        <a>
                            <Menu4Icon fill={router.pathname === '/main/love' ? '#ECB7B3' : '#fff'} />
                        </a>
                    </Link>
                    <Link href={'/main/account'}>
                        <a>
                            <Menu5Icon fill={router.pathname === '/main/account' ? '#ECB7B3' : '#fff'} />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
