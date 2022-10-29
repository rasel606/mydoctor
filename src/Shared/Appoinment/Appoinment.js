import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import AppoinmentBanner from './APPOINMENTBANNER/AppoinmentBanner';
import AvailableService from './AvailableService/AvailableService';

const Appoinment = () => {
    const [date,setDate]=useState(new Date())
    return (
        <div>
            <AppoinmentBanner date={date}  setDate={setDate}></AppoinmentBanner>
            <AvailableService date={date} ></AvailableService>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;