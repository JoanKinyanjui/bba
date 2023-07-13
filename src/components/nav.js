import React from 'react';
import styles from '../styles/nav.module.css';
import 'tailwindcss/tailwind.css';
import SpecNav from './SpecNav';
import Link from 'next/link';



function Nav() {
  return (
    <div>

        {/* Desktop */}
        <div className='hidden md:grid w-10/12  mx-auto py-4'>
       <div className='flex place-content-center items-center'>
       <div className='flex place-content-start'>
            <img  src='/images/logo.png'/>
        </div>
        <div className='  mx-auto text-center border'>
            <Link href='/'><p className={`${styles.BBAName}`}>BLOCKCHAIN BUZZ AFRICA</p></Link>
        </div>
       </div>
       <div className='w-1/3 mx-auto py-4'>
       <SpecNav />
       </div>
        </div>

        {/* Mobile */}
        <div className='grid md:hidden w-11/12 mx-auto py-4'>
        <div className='flex place-content-center items-center justify-between'>
        <div className=''>
            <img  src='/images/menu.png '  className='w-[30px] h-[30px]'/>
        </div>
        <div>
            {/* <p className={`${styles.BBANameMobile}`}>BLOCKCHAIN BUZZ AFRICA</p> */}
            <img  src='/images/logo.png' className='w-[50px] h-[50px]'/>
        </div>
        </div>
        
        </div>
    </div>
  )
}

export default Nav