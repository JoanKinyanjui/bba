import Footer from "@/components/Footer";
import LearnBlockChain from "@/components/Index/LearnBlockChain";
import PodcastsAndVideos from "@/components/Index/PodcastsAndVideos";
import RecentArticles from "@/components/Index/RecentArticles";
import DappStore from "@/components/Index/dappStore";
import HeroSection from "@/components/Index/heroSection";
import Nav from "@/components/nav";


export default function Home() {
  return (
   <div>
    {/* Nav */}
    <div>
      <Nav />
      <HeroSection />
      <RecentArticles word='Recent' show={false} />
      <LearnBlockChain />
      <PodcastsAndVideos />
      <DappStore />
      <Footer />
    </div>
   </div>
  )
}
