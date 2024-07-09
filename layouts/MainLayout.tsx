import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const MainLayout = ({ children = <></>, title = '' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="flex justify-between items-center w-full h-16">
        <div className="absolute left-32 top-6 w-48 h-6">
            <Image width={200} height={200} src="/BlockChain.png" alt="BlockChain"/>
        </div>
        <nav className="flex gap-6 absolute left-1/2 transform -translate-x-1/2 top-8">
            <button className="text-white text-sm font-medium">Exchange</button>
            <button className="text-white text-sm font-medium">Last Transactions</button>
            <button className="text-white text-sm font-medium">Invite Friend</button>
            <button className="text-white text-sm font-medium">Notifications</button>
        </nav>
        <div className="flex gap-4 absolute right-32 top-6">
            <button className="px-4 py-2 text-white border border-[#9945FF] rounded-tr-lg rounded-bl-lg">LOG IN</button>
            <button className="px-4 py-2 bg-[#9945FF] text-white rounded-tr-lg rounded-bl-lg">SIGN UP</button>
        </div>
    </header>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
