import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './components/Dashboard/Dashboard';
import UsersPage from './pages/Dashboard/Users';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;