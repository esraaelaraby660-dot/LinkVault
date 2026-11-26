import { Route, Routes } from "react-router-dom";
import Home from './../pages/Home';
import ForgetPassword from './../pages/auth/ForgetPassword';
import Login from './../pages/auth/Login';
import Register from './../pages/auth/Register';
import OTP from "../pages/auth/OTP";
import ResetPassword from './../pages/auth/ResetPassword';

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="forgetpassword" element={<ForgetPassword/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="otp" element={<OTP/>} />
        <Route path="resetpassword" element={<ResetPassword/>} />
      </Routes>
    </>
  )
}
