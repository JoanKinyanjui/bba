import Footer from '@/components/Footer'
import PodcastsAndVideos from '@/components/Index/PodcastsAndVideos'
import Nav from '@/components/nav'
import React from 'react'

function podcasts() {
  return (
    <div>
        <Nav />
        <PodcastsAndVideos />
        <Footer />
    </div>
  )
}

export default podcasts