import React from 'react';
import Services from '../Services/Services';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'

const OurServices = () => {
    const services = [
        {
            _id:1,
            name:'Fluride Treatment',
            img:fluoride
        },
        {
            _id:2,
            name:'Cavity Filling',
            img:cavity
        },
        {
            _id:3,
            name:'Teeth Whitening',
            img:whitening
        }
    ]
    return (
        <div>
            <div className='text-center text-bold my-28'>
                <h3 className='font-bold  text-[#19D3AE]'>OUR SERVICES</h3>
                <p className='text-2xl text-[#3A4256]'>Services We Provide</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
            {
            services.map(service => <Services key={service._id} service={service}></Services>)
            }
            </div>
        </div>
    );
};

export default OurServices;