
import { Routes, Route} from "react-router-dom";
import Header from "./Shared/Header/Header";
import Home from './Shared/Home/Home'
import About from './Shared/About/About'
import Appoinment from './Shared/Appoinment/Appoinment'
import Review from './Shared/Review/Review'
import ContactUs from './Shared/ContactUs/ContactUs'
import Login from "./Shared/Login/Login";
import CreatUser from "./Shared/Login/CreatUser/CreatUser";
import RequirAuth from "./Shared/Login/RequirAuth/RequirAuth";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import DashBoard from "./Shared/Dashboard/DashBoard";
import MyAppoinment from "./Shared/Dashboard/MyAppoinment";
import MyReview from "./Shared/Dashboard/MyReview";
import MyHistory from "./Shared/Dashboard/MyHistory/MyHistory";
import AllUser from "./Shared/Dashboard/AllUser/AllUser";
import RequirAdmin from "./Shared/Login/RequirAuth/RequirAdmin";
import AddDoctors from "./Shared/Dashboard/AddDoctors/AddDoctors";

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/appoinment" element={
        <RequirAuth>
          <Appoinment/>
        </RequirAuth>} />
        <Route path="/dashboard" element={
        <RequirAuth>
          <DashBoard/>
        </RequirAuth>} >
        <Route index element={<MyAppoinment/>} />
          <Route path="myreview" element={<MyReview/>}></Route>
          <Route path="myhistory" element={<MyHistory/>}></Route>
          <Route path="alluser" element={<RequirAdmin><AllUser/></RequirAdmin>}>
          </Route>
          <Route path="addDoctor" element={<RequirAdmin><AddDoctors/></RequirAdmin>}>
          </Route>

        </Route>
        <Route path="/review" element={<Review></Review>} />
        <Route path="/contactus" element={<ContactUs></ContactUs>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<CreatUser></CreatUser>} />
        
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
