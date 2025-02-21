import Blogs from "../components/home/blogs/Blogs"
import Campaigns from "../components/home/campaigns/Campaigns"
import Categories from "../components/home/categories/Categories"
import Products from "../components/home/products/Products"
import Slider from "../components/home/slider/Slider"
import Brands from "../components/layout/brands/Brands"
import CampaignSingle from "../components/layout/campaign/CampaignSingle"

function Home() {
    return (
        <>
            <div>
                <Slider />
                <Categories />
                <Products />
                <Campaigns />
                <Products />
                <Blogs />
                <Brands />
                <CampaignSingle />
            </div>

        </>
    )
}

export default Home