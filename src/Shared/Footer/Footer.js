import React from 'react';
import myfooter from '../../assets/images/footer.png'
const Footer = () => {
    return (
        <div >
            <div style={{background:`url(${myfooter})`,backgroundSize:'cover'}}
            >
            <footer class="footer p-10  ">
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <div className='mb-6'>
    <p className='text-center'>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
  </div>
        </div>
        </div>
    );
};

export default Footer;