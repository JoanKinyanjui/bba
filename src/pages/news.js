import Footer from "@/components/Footer"
import RecentArticles from "@/components/Index/RecentArticles"
import Nav from "@/components/nav"


function Newsa() {
  return (
    <div>
        <Nav />
        <RecentArticles word='More' show={true}/>
        <Footer />
    </div>
  )
}

export default Newsa