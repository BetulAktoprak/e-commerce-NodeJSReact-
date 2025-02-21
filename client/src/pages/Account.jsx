import Login from "../components/account/Login"
import Register from "../components/account/Register"

function Account() {
    return (
        <>
            <section className="account-page">
                <div className="container">
                    <div className="account-wrapper">
                        <Login />
                        <Register />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Account