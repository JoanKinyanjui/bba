import React from 'react';
import styles from '../styles/nav.module.css';
import 'tailwindcss/tailwind.css';
import SpecNav from './SpecNav';



function Nav() {
  return (
    <div>

        {/* Desktop */}
        <div className='hidden md:grid w-10/12   mx-auto'>
       <div className='flex place-content-center items-center'>
       <div className='flex place-content-start'>
            <img  src='/images/menu.png'/>
        </div>
        <div className=' w-3/4 lg:w-1/2 mx-auto text-center'>
            <p className={`${styles.BBAName}`}>BLOCKCHAIN BUZZ AFRICA</p>
        </div>
       </div>
       <div className='w-3/4 mx-auto py-4'>
       <SpecNav />
       </div>
        </div>

        {/* Mobile */}
        <div className='grid md:hidden w-11/12 mx-auto'>
        <div className='flex place-content-center items-center justify-between'>
        <div className=''>
            <img  src='/images/menu.png '  className='w-[30px] h-[30px]'/>
        </div>
        <div>
            <p className={`${styles.BBANameMobile}`}>BLOCKCHAIN BUZZ AFRICA</p>
        </div>
        </div>
        <div className='py-4'>
            <SpecNav />
        </div>
        </div>
    </div>
  )
}

export default Nav