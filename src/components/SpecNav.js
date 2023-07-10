import React from 'react';
import styles from '../styles/nav.module.css'

function SpecNav() {
  return (
    <div className='flex place-content-between rounded-[12px] bg-[#EEE] px-4 h-[35px] md:h-[50px] items-center'>
        <div className={`${styles.SpecNavName} py-2`} >NEWS</div>
        <div className={`${styles.SpecNavName} py-2`}>LEARN</div>
        <div className={`${styles.SpecNavName} py-2`}>PODCASTS</div>
        <div className={`${styles.SpecNavName} py-2`}>DAPP STORE</div>
    </div>
  )
}

export default SpecNav