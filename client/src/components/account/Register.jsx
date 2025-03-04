import { useState } from "react"
import api from "../../services/api";

function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/auth/register", formData);
            console.log(response.data);

        } catch (error) {
            console.error("Hata Detayı:", error.response?.data);
            alert(error.response?.data?.error || "Bir şeyler yanlış gitti..");
        }
    }
    return (
        <>
            <div className="account-column">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            <span>Username <span className="required">*</span></span>
                            <input type="text" name="username" onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Email address <span className="required">*</span></span>
                            <input type="email" name="email" onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Password <span className="required">*</span></span>
                            <input type="password" name="password" onChange={handleChange} />
                        </label>
                    </div>
                    <div className="privacy-policy-text remember">
                        <p>
                            Your personal data will be used to support your experience throughout this website, to
                            manage access to your account, and for other purposes described in our <a href="#">privacy policy.</a>
                        </p>
                        <button className="btn btn-sm" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register