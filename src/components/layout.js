import React from 'react'
import Header from './header'

import '../css/style.css'


const Layout = ({ children }) => (

    <body className='min-h-screen g-grey-light font-sans antialiased'>
        <Header/>

        <div className='container items-center flex mx-auto'>
            <div className='lg:w-1/4'></div>

            <div className='flex flex-col lg:w-2/3 lg:px-0 px-4'>
                {children}
            </div>

            <div className='lg:w-1/4'></div>
        </div>

       <div className='pb-12'></div>

    </body>


    )

export default Layout
