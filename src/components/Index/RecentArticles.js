import React from 'react';
import styles from '../../styles/Articles.module.css';
import {articles} from '../Data/Articles'
import Link from 'next/link';

function RecentArticles({word,show}) {
  return (
    <div className=' w-screen px-2 md:px-0 md:w-10/12 mx-auto py-8 md:py-24'>
<div>
    <p className={`${styles.TheLatest}`} >THE LATEST</p>
   <div className='flex justify-between w-full items-center'>
   <p className={`${styles.RecentArticlesWord} py-4`}>{word} Articles</p>
   {show ? "" : <div className=''>
  <Link href='/news'>  <button className={`${styles.ViewMore}`}>View More</button></Link>
   </div>}
   </div>
</div>


       {/* desktop and mobile */}
       {articles.map((item)=>(
       <div className='grid ' key={item.id}>
      
   <Link href={item.link} >
   <div className='flex justify-between items-center py-4 md:py-8 ' key={item.id}>
   <div className={` w-[30%] h-[120px] md:h-[130px]`}>
     <img   src = '/images/article1.png' className=' w-5/6 md:w-3/4 h-full rounded-[10px] mx-auto' />
   </div>

   <div className='grid w-[60%]  text-left'>
    <div className='flex  gap-[15px] md:gap-[30px]'>
    <p  className={`${styles.NewsLabel}`}>NEWS</p>
    <p className={`${styles.SmallSubTitles}`} >By Henry Kariuki</p>
    <p className={`${styles.SmallSubTitles}`} >June,21,2023</p>
    </div>
    <div>
     <p className={`${styles.ParagraphTitle}`}>Nelson Mandela Foundation Seeks to Raise $1.9 Million from Sale of 27 Mandela NFTs</p>
    </div>
   </div>

   <div className='w-[10%]  place-content-center flex'>
     <div className={`${styles.ArrowDiv}`}>
     <img  src='/images/arrow.png'/>
   </div>
   </div>

 </div></Link>
      
     

        <div className={`${styles.bottomLine}`}></div>

       </div>
       ))}

{show ?
<Link href="/news"><div className='py-8 mt-4 mx-auto text-center'>
    <button className={`${styles.ViewMore}`}>View More</button>
   </div> </Link>
   : ""}
    </div>
  )
}

export default RecentArticles