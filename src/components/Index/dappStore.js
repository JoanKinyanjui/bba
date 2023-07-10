import React from 'react';
import styles from '../../styles/dapp.module.css'
import { dapps } from '../Data/dapp';

function DappStore() {
  return (
    <div className='w-11/12 md:w-10/12 mx-auto py-8 md:py-24'>
        <p className={`${styles.TheLatest} `}>DAPPSTORE</p>
        <p className={`${styles.Blockchainappsinafricaword} py-4`}>BLOCKCHAIN APPLICATION IN AFRICA</p>

       {dapps.map((item)=>(
         <div className={`${styles.SpecDapp} flex justify-between items-center px-2 md:px-4  mb-[15px] md:mb-[24px] py-2`} key={item.id}>
         <div className='flex'>
             <div>
                 <img src='/images/dapp.png'/>
             </div>
             <div className='grid place-content-start'>
                   <p className="text-[#4D4D4D] text-[15px] md:text-[18px]">{item.name}</p>
                   <p className='text-[#4D4D4D] text-xs md:text-sm'>BNB Chain</p>
             </div>
         </div>
         <div>
             <p className='italic text-xs md:text-sm text-neutral-500'>defi</p>
         </div>

     </div>
       ))}
    </div>
  )
}

export default DappStore