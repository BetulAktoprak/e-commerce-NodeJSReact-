
function ProductForm() {
    return (
        <>
            <form className="variations-form">
                <div className="variations">
                    <div className="colors">
                        <div className="colors-label">
                            <span>Color</span>
                        </div>
                        <div className="colors-wrapper">
                            <div className="color-wrapper">
                                <label className="blue-color">
                                    <input type="radio" name="product-color" />
                                </label>
                            </div>
                            <div className="color-wrapper">
                                <label className="red-color">
                                    <input type="radio" name="product-color" />
                                </label>
                            </div>
                            <div className="color-wrapper active">
                                <label className="green-color">
                                    <input type="radio" name="product-color" />
                                </label>
                            </div>
                            <div className="color-wrapper">
                                <label className="purple-color">
                                    <input type="radio" name="product-color" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="values">
                        <div className="values-label">
                            <span>Size</span>
                        </div>
                        <div className="values-list">
                            <span className="active">XS</span>
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                        </div>
                    </div>
                    <div className="cart-button">
                        <input type="number" defaultValue={1} min={1} id="quantity" />
                        <button className="btn btn-lg btn-primary" id="add-to-cart" type="button">Add to
                            cart</button>
                    </div>
                    <div className="product-extra-buttons">
                        <a href="#">
                            <i className="bi bi-globe" />
                            <span>Size Guide</span>
                        </a>
                        <a href="#">
                            <i className="bi bi-heart" />
                            <span>Add to Wislist</span>
                        </a>
                        <a href="#">
                            <i className="bi bi-share" />
                            <span>Share this Product</span>
                        </a>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ProductForm