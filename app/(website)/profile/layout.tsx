import React from 'react';
import Layout from '@/app/(website)/_components/layout';

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    return <Layout>{children}</Layout>;
};

export default ProfileLayout