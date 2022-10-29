import React, { useState } from 'react';
import Banner from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../../assets/images/bg.png'
import { format } from 'date-fns';


const AppoinmentBanner = ({date,setDate}) => {
    
    return (
        <div >
            <div class="hero min-h-screen bg-base-200" style={{background:`url(${bg})`}}>
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={Banner} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;