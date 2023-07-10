import React from 'react';
import styles from '../styles/footer.module.css';

function Footer() {
  return (
    <div className='w-11/12 md:w-10/12 mx-auto grid md:justify-between md:flex  py-8 pt-12 '>
        
        <div className='grid md:flex w-full md:w-1/2  text-[#0A0A0A]'>

            <div className='w-ful md:w-full mx-auto  md:mx-0'>
              <img src='/images/logo.png'  className='mx-auto md:mx-0'/>
              <p className='text-[16px] py-4 '>© BBA 2023 All rights reserved </p>
            </div>
         <div className='w-2/3 md:w-full mx-auto md:mx-0 flex py-8 md:py-4' >
         <div className='w-1/2 md:w-full mx-auto md:mx-0 text-center md:text-start text-[14px] '>
             <p className='py-2' >Quick Links</p>
             <p className='py-2' >All News</p>
             <p className='py-2' >Podcasts & Videos</p>
             <p className='py-2' >Dapp Store</p>
            </div>
            <div className='w-1/2 md:w-full mx-auto md:mx-0 text-center md:text-start text-[14px]'>
             <p className='py-2' >Legal</p>
             <p className='py-2' >Privacy Policy</p>
             <p className='py-2' >Terms & Conditions</p>
             <p className='py-2' >Affiliate Terms</p>
             <p className='py-2' >Cookies Policy</p>
            </div>
         </div>

         
        </div>
        
        <div className='grid md:flex w-full md:w-1/6  text-[#0A0A0A]'>

        </div>

        <div className='md:text-start text-center w-11/12 mx-auto md:w-1/3 text-[#757575] text-[13px]'>
            <p className='text-black text-[15px]'>About</p>
            <p className='py-2'>Blockchain Buzz Africa is a media company working towardsblockchain adoption by providing insightful content for readers, viewersand commentators. </p>
            <p className='py-2'>Our Learning programs help our community gain an understanding of the industry, choose career paths and acquire skills on the same.</p>
            <p className='text-black text-[15px] py-2'>Connect with us on Social Media</p>
            <div className='flex justify-between md:justify-start md:gap-[10px]  md:w-full md:mx-0 w-3/4 mx-auto py-2'>
                <div className={`${styles.BackgrounIcon} px-2`}>
                <img src='/images/twittericon.png' />
                </div>
                <div className={`${styles.BackgrounIcon} px-2`}>
                <img src='/images/telegram.png' />
                </div>
                <div className={`${styles.BackgrounIcon} px-2`}>
                <img src='/images/inst.png' />
                </div>
                <div className={`${styles.BackgrounIcon} px-2`}>
                <img src='/images/discord.png' />
                </div>
            </div>
         </div>
    </div>
  )
}

export default Footer