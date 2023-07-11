import React from 'react';
import styles from '../../styles/learn.module.css'

function MainContent() {
  return (
    <div className='w-11/12 md:w-10/12 mx-auto md:py-12 py-8'>
    <div className='pb-4'>
        <p className={`${styles.AdvanceYourCareer}`}>Advance Your Web3 Career:</p>
        <p className={`${styles.LearnFromExperts}`}>Learn from Industry Experts</p>
    </div>
    <div className='w-3/4 md:w-8/12 mx-auto text-center  text-[15px] md:text-[18px]'>
        <p>Acquire in-demand skills, work on innovative tech projects, and belong to a thriving community of lifelong learners</p>
    </div>

    <div className='py-12  w-11/12 md:w-1/2  flex mx-auto justify-between   md:px-4'>
        <button  className={`${styles.StartLearningButton}`}>START LEARNING</button>
        <button className={`${styles.GetMentorButton}`}> GET MENTORSHIP</button>
    </div>

    <div className='w-full grid  place-content-center'>
        <p className={`${styles.CourseDirectory}  text-center py-2`}>COURSE DIRECTORY</p>
        <p className={`${styles.ExploreMore}`}>Explore our course directory to get started on our acquiring in-demand skills in the industry</p>
    </div>

    <div className='w-full md:w-5/6 mx-auto grid  md:flex md:justify-between py-8 md:py-12'>
        <img src='/images/card.png'  className='md:w-full w-5/6 mx-auto py-4 md:py-0 ' />
        <img  src='/images/card2.png' className='md:w-full w-5/6 mx-auto  py-4 md:py-0 '/>
    </div>
    </div>
  )
}

export default MainContent