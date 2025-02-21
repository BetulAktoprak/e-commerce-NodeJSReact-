import Categories from '../components/home/categories/Categories';
import ProductItem from '../components/home/products/ProductItem';
import Products from '../components/home/products/Products';
import CampaignSingle from '../components/layout/campaign/CampaignSingle';

function Shop() {
    return (
        <>
            <div>
                <Categories />
                <Products />
                <CampaignSingle />
                <section className="products">
                    <div className="container">
                        <div className="section-title">
                            <h2>New Arrivals</h2>
                            <p>Summer Collection New Morden Design</p>
                        </div>
                        <div className="product-wrapper product-carousel2">
                            <div className="glide__track" data-glide-el="track">
                                <ul className="product-list glide__slides">
                                    <ProductItem />
                                </ul>
                            </div>
                            <div className="glide__arrows" data-glide-el="controls">
                                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                                    <i className="bi bi-chevron-left" />
                                </button>
                                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                                    <i className="bi bi-chevron-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Shop