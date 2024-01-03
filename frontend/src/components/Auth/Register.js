import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/register`, {
                name,
                email,
                phone,
                password,
            });
            toast.success('Register success. Please login.');
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.data) {
                toast.error(error.response.data);
            }
        }
    };

    return (
        <div className="container">
            <div className="row p-5">
                <div className="col-md-6 offset-md-3">
                    <img src="Solyntek.png" alt="logo" className="mx-auto d-block" />
                    <br />
                    <h4 className="text-center pb-4">Register</h4>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-control mb-4 p-4 rounded-5"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            required
                        />
                        <input
                            type="email"
                            className="form-control mb-4 p-4 rounded-5"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                        <input
                            type="text"
                            className="form-control mb-4 p-4 rounded-5"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone"
                            required
                        />
                        <input
                            type="password"
                            className="form-control mb-4 p-4 rounded-5"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                        <br />
                        <div class="d-grid gap-2">
                            <button type="submit" className="btn btn-primary btn-raised p-3 rounded-5">
                                Register
                            </button>
                        </div>
                        <br />
                        <p>
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
