import Link from 'next/link';
import styles from '../styles/nav.module.css';
import {MdClose} from 'react-icons'

function PhoneNav({toggleDrawer}) {
  return (
    <div className='w-screen h-screen'>
      <div className='place-content-end flex px-2 py-2'>
      <img src='/images/close.png' onClick={toggleDrawer(false)}/>
      </div>
    <div className='w-10/12 mx-auto  grid place-content-center pt-2 '>
     <img src='/images/logo.png' className='mx-auto py-4'/>
     <p className={`${styles.BBANameMobile}`}>BLOCKCHAIN BUZZ AFRICA</p>
    </div>
  
    <div className='grid place-content-center w-10/12 mx-auto py-4 '>
  <Link href='/'>
  <div className={`${styles.HomeDiv} w-full  py-[10px] flex place-content-center`}> <p>Home</p></div>
  </Link>
     <div className={`${styles.BorderBox}`}></div>
     <Link href='/about'>
     <div className={`${styles.HomeDiv}  py-[10px] flex place-content-center`}><p>News  </p></div>
     </Link>
     <div className={`${styles.BorderBox}`}></div>
     <Link href='/nft'>
     <div className={`${styles.HomeDiv}  py-[10px] flex place-content-center`}><p>Learn</p></div>
     </Link>
     <div className={`${styles.BorderBox}`}></div>
     <Link href='/techStack'>
     <div className={`${styles.HomeDiv}  py-[10px] flex place-content-center`}><p>Podcats</p></div>
     </Link>
     <Link href='/techStack'>
     <div className={`${styles.HomeDiv}  py-[10px] flex place-content-center`}><p>Dappstore</p></div>
     </Link>
     <div className={`${styles.BorderBox}`}></div>

    </div>
  
      </div>

  )
}

export default PhoneNav;