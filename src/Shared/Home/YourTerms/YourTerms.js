import React from 'react';
import treatment from "../../../assets/images/treatment.png"
import PrimaryBtn from '../../PrimaryBtn/PrimaryBtn';

const YourTerms = () => {
    return (
        <div >
            <div class="hero min-h-screen bg-base-200 bg-white ">
                <div class="hero-content flex-col lg:flex-row-reverse ">
                    
                    <div className='px-6'>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryBtn>Get Started</PrimaryBtn>
                    </div>
                    <div>
                    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourTerms;