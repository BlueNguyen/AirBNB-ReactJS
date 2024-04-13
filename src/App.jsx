import { BrowserRouter, Route, Routes ,Navigate } from "react-router-dom";
import { redirect } from 'react-router';
import Spinner from "./components/Spinner";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import LoginAdmin from "./pages/Admin/LoginAdmin/LoginAdmin";
import RegisterAdmin from "./pages/Admin/RegisterAdmin/RegisterAdmin";
import ForgetPassword from "./pages/Admin/ForgetPassword/ForgetPassword";
import AdminLayout from "./layouts/AdminLayout";
import UserAdminPage from "./pages/Admin/User/UserAdminPage";
import RoomAdminPage from "./pages/Admin/Room/RoomAdminPage";
import ChartAdminPage from "./pages/Admin/Chart/ChartAdminPage";
import LocationAdminPage from "./pages/Admin/Location/LocationAdminPage";
import BookingAdminPage from "./pages/Admin/Booking/BookingAdminPage";

function App() {
  return (
    <>
      <Spinner />
      <BrowserRouter>
        <Routes>
          {/* ADMIN PAGE */}
          <Route path="/" element={<Navigate to="/admin" replace />} />
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='user' element={<UserAdminPage />} />
            <Route path='room' element={<RoomAdminPage />} />
            <Route path='location' element={<LocationAdminPage />} />
            <Route path='booking' element={<BookingAdminPage />} />
            <Route path='chart' element={<ChartAdminPage />} />
            <Route path='login' element={<LoginAdmin />} />
            <Route path='register' element={<RegisterAdmin />} />
            <Route path='forgot-password' element={<ForgetPassword />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
