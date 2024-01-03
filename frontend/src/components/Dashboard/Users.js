import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Sidebar from "../Layout/SideBar";

const Users = () => {
    const [users, setUsers] = useState([]);


    const loadUsers = async () => {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users`);
        setUsers(res.data);
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const handleDelete = async (userId) => {
        if (window.confirm('Are you sure you want to delete?')) {
            
            try {
                await axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${userId}`);
                toast.success('User deleted');
                loadUsers();
            } catch (error) {
                toast.error('Delete failed. Try again.');
            }
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <h4>Users</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <table className="table table-bordered">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Update</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user._id}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>
                                                <Link to={`/users/${user._id}`}>
                                                    <EditOutlined className="text-warning" />
                                                </Link>
                                            </td>
                                            <td>
                                                <DeleteOutlined
                                                    onClick={() => handleDelete(user._id)}
                                                    className="text-danger"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;
