import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="max-h-[calc(100vh)]">
            <div className="absolute top-0 left-0 w-full h-full fade-in">
                <img src="/assets/images/login/bg.jpg" className="object-cover object-top w-full h-full" alt="" />
            </div>
            <div className="relative z-10 flex flex-col items-center  h-[calc(100vh)]">
                <Link href="/main">
                    <div className="bg-[#FFBD59] relative w-full pl-20">
                        <div>Make it Home</div>
                        <img src="/assets/images/login/logo.png" className="absolute top-0 z-50 object-cover object-top h-16 left-4" alt="" />
                    </div>
                </Link>
                {children}

                <div className="bg-[#443A3A] relative w-full pl-20 h-6">
                    <button className="bg-[#FFBD59] text-[18px] rounded-[8px] text-[#443A3A] py-1 absolute bottom-4 right-4 px-4">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
