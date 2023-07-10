import React from 'react'
import styles from "../../styles/learnBlockchain.module.css"

function LearnBlockChain() {
  return (
    <div className='w-11/12 md:w-10/12 mx-auto  py-8 md:py-24'>
        <p className={`${styles.TheLatest}`}>LEARN</p>
        <div className='grid md:flex w-full items-center md:gap-[10px]'>
            <div className='w-full md:w-1/3'>
                <p className={`${styles.SubTitleHere} py-4`}>Learn about the blockchain, crypto, nft and more through our channels.</p>
                <p className={`${styles.SubTitleHerePtag} pt-[20px] pb-[10px]`}>Blockchain Buzz Africa provides educational content for peers interested in learning the basics of blockchain, softwaredevelopement, web3, design and nfts.We use the following mediums to provide materials for you to kickstart your journey.</p>


                <div className="w-[100%] flex  gap-[25px] pt-[20px]">
                    <div className={`${styles.LearnMoreDivs} w-[30%] grid place-content-center items-center`}>
                        <img src='/images/news.png' className='mx-auto py-2 md:py-4'/>
                        <p className={`${styles.NewsLearnWord}`}>NEWS</p>
                    </div>
                    <div className={`${styles.LearnMoreDivs} w-[30%] grid place-content-center items-center`}>
                        <img src='/images/articlesicon.png'  className='mx-auto py-2 md:py-4' />
                        <p className={`${styles.NewsLearnWord}`}>ARTICLES</p>
                    </div>
                   
                    <div className={`${styles.LearnMoreDivs} w-[30%] grid place-content-center items-center`}>
                        <img src='/images/podcasticon.png' className='mx-auto py-2 md:py-4' />
                        <p className={`${styles.NewsLearnWord}`}>PODCASTS</p>
                    </div>
                    </div>
                    <div className="w-[100%] flex gap-[25px] pb-[10px]">
                    <div className={`${styles.LearnMoreDivs} w-[30%] grid place-content-center items-center`}>
                        <img src='/images/guidesicon.png.png'  className='mx-auto py-2 md:py-4'/>
                        <p className={`${styles.NewsLearnWord}`}>GUIDES</p>
                    </div>
                    <div className={`${styles.LearnMoreDivs} w-[30%] grid place-content-center items-center`}>
                        <img src='/images/videosicons.png'  className='mx-auto py-2 md:py-4'/>
                        <p className={`${styles.NewsLearnWord}`}>VIDEOS</p>
                    </div>
                    <div className={`${styles.LearnMoreDivs} w-[30%] grid place-content-center items-center`}>
                        <img src='/images/tutorialsicon.png' className='mx-auto  py-2 md:py-4'/>
                        <p className={`${styles.NewsLearnWord}`}>TUTORIALS</p>
                    </div>
                   
                </div>
            </div>

            <div className='w-11/12 mx-auto py-4 md:w-2/3 md:py-0  md:grid md:justify-items-stretch'>
                <img  src='/images/graphic.png' className='px-4 md:mx-auto md:justify-self-center'/>
            </div>
        </div>
    </div>
  )
}

export default LearnBlockChain