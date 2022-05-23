import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import Contact from './pages/Contact/Contact';
import Home from './pages/home/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Reviews from './pages/Reviews/Reviews';
import Footer from './pages/shared/Footer/Footer';
import Navbar from './pages/shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import Register from './pages/Login/Register/Register';
import RequireAuth from './pages/shared/RequireAuth/RequireAuth';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointment from './pages/Dashboard/MyAppointment';
import MyReview from './pages/Dashboard/MyReview';
import AllUsers from './pages/Dashboard/AllUsers';
import RequireAdmin from './pages/shared/RequireAuth/RequireAdmin';

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment />}></Route>
          <Route path='myreview' element={<MyReview />}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <AllUsers />
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path='reviews' element={<Reviews></Reviews>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
