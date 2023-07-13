import React from 'react';
import styles from '../../styles/hero.module.css';
import { markets } from '../Data/markets';

function HeroSection() {
  return (
<div class="md:flex md:flex-row-reverse sm:grid sm:grid-cols-3 w-11/12 md:w-10/12 mx-auto md:items-center md:py-8">
  
  <div class={`${styles.MarketsDivComponent} md:w-1/4 mx-auto  py-4 md:py-0 `}>
    <p className={`${styles.FeaturedName} px-4 py-4 hidden md:flex md:px-4`}>Markets</p>
<div className={`${styles.AllowStuff} overflow-x-auto whitespace-nowrap gap-[10px] md:gap-[0px] md:px-4`}>
{markets.map((item)=>(
     <div className={`${styles.MarketsIndividual} flex  justify-between items-center py-1 md:py-2 md:mb-[24px] px-2`} key={item.id}>
     <div className='flex items-center'>
        <img  src="/images/btcicon.png"  className='w-[20px] md:w-full'/>
        <p className=' text-[14px] md:text-[18px] px-4'>Bitcoin</p>
        <p className='text-[#4D4D4D] text-[8px] md:text-[10px] '>BTC</p>
     </div>

     <div>
         <p className='text-[#4D4D4D]  text-[10px] md:text-[14px]'>$30,176</p>
     </div>
 </div>
   ))}
</div>
  </div>

  <div class={`${styles.MainAllNewsComponent} md:w-1/2  md:mx-4 py-2 md:py-0 "`}>
    {/* <div className={`${styles.item3Bg} grid items-center place-content-center`}> */}
        <img src='/images/article3.jpg' className='w-[640px] h-[480px] rounded-sm py-4'/>
    {/* </div> */}
    <div>
        <p className={`${styles.TopicHere} py-4 pb-8`}>How Web3 Communities Spearhead Blockchain Adoption</p>
       <div  className='flex w-2/3  md:w-2/3 justify-between text-[#4D4D4D] text-xs md:text-sm'>
       <p>Author : Michael Loupa</p>
        <p>May 12 2023</p>
       </div>
    </div>

    <div className={`${styles.AllNewsDivContent} flex place-content-center `}>
        <p>ALL NEWS</p>
        <img  src='/images/arrowup.png'/>
    </div>
  </div>

  <div class={`${styles.AllFaeturedComponent} md:w-1/4 py-12 md:py-0 md:mx-4 w-full  items-center`}>
    <p className={`${styles.FeaturedName} px-4 py-4`} >Featured</p>
    <div className='flex md:grid w-full '>
        <div className='grid md:text-start text-start md:py-8'>
        <img   src='/images/item1.png'/>
        <p className={`${styles.BuyArbitrum} px-4 py-4`}>Buy $BBPP NFTs on  ARBITRUM</p>
        <div className={`${styles.BorderArbitrum}`}></div>
        </div>
        <div className='grid md:text-start text-start  md:py-8 mx-4 md:mx-0'>
        <img   src='/images/item1.png'/>
        <p className={`${styles.BuyArbitrum} px-4 py-4`}>Buy $BBPP NFTs on  ARBITRUM</p>
        <div className={`${styles.BorderArbitrum} md:hidden flex`}></div>
        </div>
       

    </div>
  </div>

  
</div>


  )
}

export default HeroSection