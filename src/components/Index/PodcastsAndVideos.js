import React from 'react';
import styles from '../../styles/podcast.module.css'
import { podcasts } from '../Data/podcasts';

function PodcastsAndVideos() {
  return (
    <div className='w-11/12 md:w-10/12 mx-auto'>
  <div className='grid mx-auto w-full md:w-10/12 '>
   <img src='/images/base.png' className='' />
   <p className={`${styles.HowToSendATransaction}  py-2 md:py-4`}>How to send a transaction using #ethersjs and #alchemy</p>
   <div className='flex items-center text-[#333] text-xs md:text-sm pr-4'>
    <p>Jun 22, 2023</p>
   <p className='px-[8px]'>4m 51s</p>
   <img  src='/images/clock.png' className='w-[14px] h-[14px]'/>
   </div>
</div>

<div className={`flex overflow-x-auto ${styles.OverflowPodcastsOnYoutube} py-8 md:py-12 md:gap-[15px]`}>
  {podcasts.map((item) => (
    <div className="flex-none w-1/2 md:w-1/4 mx-2">
      <img src={item.image} className="" />
      <p className={`${styles.HowToSendATransactionMore} py-2`}>
        How to send a transaction using #ethersjs and #alchemy
      </p>
      <div className='flex items-center  text-xs md:text-sm text-[#44474A]'>
        <p className='mr-4'>Interviews</p>
        <img src='/images/video.png' />
      </div>
      <div className="flex items-center  text-[#44474A] text-xs md:text-sm pr-2">
        <p>Jun 22, 2023</p>
        <p className="px-2">4m 51s</p>
        <img src="/images/clock.png" className="w-4 h-4" />
      </div>
    </div>
  ))}
</div>

        
    </div>
  )
}

export default PodcastsAndVideos