import ProductForm from "./ProductForm"

function SingleContent() {
    return (
        <>
            <div className="single-content">
                <main className="site-main">
                    <div className="product-gallery">
                        <div className="single-image-wrapper">
                            <img src="img/products/product2/1.png" id="single-image" alt />
                        </div>
                        <div className="product-thumb">
                            <div className="glide__track" data-glide-el="track">
                                <ol className="gallery-thumbs glide__slides" />
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
                    <div className="product-info">
                        <h1 className="product-title">
                            Ridley High Waist
                        </h1>
                        <div className="product-review">
                            <ul className="product-star">
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-fill" /></li>
                                <li><i className="bi bi-star-half" /></li>
                            </ul>
                            <span>2 reviews</span>
                        </div>
                        <div className="product-price">
                            <s className="old-price">$165</s>
                            <strong className="new-price">$100</strong>
                        </div>
                        <p className="product-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ProductForm />
                        <div className="divider" />
                        <div className="product-meta">
                            <div className="product-sku">
                                <span>SKU:</span>
                                <strong>BE45VGRT</strong>
                            </div>
                            <div className="product-categories">
                                <span>Categories:</span>
                                <strong>Pants , Women</strong>
                            </div>
                            <div className="product-tags">
                                <span>Tags:</span>
                                <a href="#">black</a>
                                ,
                                <a href="#">white</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default SingleContent