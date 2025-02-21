import CampaignSingle from "../components/layout/campaign/CampaignSingle"
import SingleContent from "../components/singleProduct/SingleContent"
import SingleTabs from "../components/singleProduct/SingleTabs"
import SingleTopbar from "../components/singleProduct/SingleTopbar"

function SingleProduct() {
    return (
        <>
            <section className="single-product">
                <div className="container">
                    <div className="single-product-wrapper">
                        <SingleTopbar />
                        <SingleContent />
                        <SingleTabs />
                    </div>
                </div>
            </section>
            <CampaignSingle />
        </>
    )
}

export default SingleProduct