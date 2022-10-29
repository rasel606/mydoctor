import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryBtn from '../../PrimaryBtn/PrimaryBtn';

const Banner = () => {
    const bgd = 'https://i.postimg.cc/Y0VQLvsf/bg.png'
    return (
       <div>
         <div class="hero min-h-screen bg-base-200 px-12 bg-no-repeat bg-left-top bg-contain bg-center bg-white" style={{backgroundImage: `url(${bgd})` }}>
                <div class="hero-content flex-col lg:flex-row-reverse bg-center ">
                    <img src={chair} class="object-contain max-w-sm rounded-lg shadow-2xl " />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryBtn>Get Started</PrimaryBtn>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Banner;