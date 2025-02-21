import CartForm from "../components/carts/CartForm"
import CartTotal from "../components/carts/CartTotal"

function Cart() {
    return (
        <>
            <section className="cart-page">
                <div className="container">
                    <div className="cart-page-wrapper">
                        <CartForm />
                        <CartTotal />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Cart