import React from 'react';
import Head from 'next/head';
import Header from './Header';
const Layout = ({children}) => {
    return ( 
        <>
            <Head>
                <link rel="icon" href="/logo.png" />
            </Head>
            <Header/>
            
            {children}
        </>
     );
}
 
export default Layout;