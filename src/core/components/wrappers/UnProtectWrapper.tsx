import { useRouter } from 'next/router';
import * as React from 'react';

import { useStoreUser } from '../../store';

interface UnProtectionWrapperProps {
    children: React.ReactNode;
}

export const UnProtectWrapper: React.FC<UnProtectionWrapperProps> = ({ children }) => {
    const user = useStoreUser();
    const router = useRouter();

    React.useEffect(() => {}, [user, router]);

    return <>{children}</>;
};
