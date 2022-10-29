import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appoinment from '../../../assets/images/appointment.png'
import PrimaryBtn from '../../PrimaryBtn/PrimaryBtn';
const MakeAppoinment = () => {
    return (
        <section style={{background:`url(${appoinment})`}} className='flex justify-center items-center mx-4'>
            <div className='flex-1 hidden lg:block' >
                <img className='mt-[-150px]' src={doctor} alt=''/>
            </div>
            <div className='flex-1 mx-4'>
                <h3 className='text-xl text-primary font-bold py-2'>Appoinment</h3>
                <h2 className='text-3xl py-2'>Make an appointment Today</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className='py-4'>
                <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;