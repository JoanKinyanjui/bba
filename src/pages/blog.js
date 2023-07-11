import Ads from "@/components/Ads"
import Footer from "@/components/Footer"
import RecentArticles from "@/components/Index/RecentArticles"
import IndividualBlog from "@/components/IndividualBlog"
import Nav from "@/components/nav"


function Blog() {
  return (
    <div>
        <Nav />
        <IndividualBlog />
        <RecentArticles  show={true} word="More"/>
        <Ads />
        <Footer />
    </div>
  )
}

export default Blog