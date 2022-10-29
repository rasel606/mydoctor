import React from 'react';
import appoinment from '../../../assets/images/appointment.png'
import PrimaryBtn from '../../PrimaryBtn/PrimaryBtn';
const ContactFrom = () => {
    return (
        <div class=' ' style={{ background: `url(${appoinment})` }}>

            <div className=''>
                <div className=''>
                <h3 className='pt-6 text-center text-secondary text-lg font-bold '>Contact Us</h3>
                <p className='text-center text-white text-3xl my-6'>Stay connected with us</p>
                </div>
                <div class="form-control  items-center">

                    <input type="text" placeholder="email" class="input input-bordered w-96" />
                </div>
                <div class="form-control mt-6 items-center">

                    <input type="text" placeholder="Name" class="input input-bordered w-96" />

                </div>
                <div class="form-control mt-6 items-center">

                    <inpu type="text" placeholder="Discription" class="input input-bordered h-24 w-96" />

                </div>
                <div class="form-control mt-6 items-center pb-8">
                    <PrimaryBtn>Submit</PrimaryBtn>
                </div>
            </div>
        </div>

    );
};

export default ContactFrom;