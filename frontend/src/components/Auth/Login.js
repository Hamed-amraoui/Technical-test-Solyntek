import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { Link } from 'react-router-dom';
import { setUser } from '../../redux/actions/authActions';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, {
                email,
                password,
            }
            );

            dispatch(setUser(res.data));
            window.localStorage.setItem("token", res.data.token);
            console.log(res.data.token);
            toast.success('Login success');
            navigate('/dashboard');
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
                    <h4 className="text-center pb-4">Login</h4>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            className="form-control mb-4 p-4 rounded-5"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
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
                                Login
                            </button>
                        </div>
                        <br />
                        <p>
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                        <Link to="/reset" className="text-center text-danger">
                            Forgot Password
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
