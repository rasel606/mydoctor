import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from '../../Review/Review';

const Tastimonial = () => {
    const review = [
        {
            _id: 1,
            name: 'Jhon Smait',
            img: people1 ,
            review: '',
            location:'carlifonia'
        },
        {
            _id: 2,
            name: 'Jhon Corish',
            img:  people2 ,
            review: '',
            location:'carlifonia'
        },
        {
            _id: 3,
            name: 'Smaith',
            img:  people3 ,
            review: '',
            location:'carlifonia'
        }
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div className='mx-5'>
                    <h4 className='text-xl text-primary font-bold'>Tastimonial</h4>
                    <h4 className='text-3xl'>What Our Patients Says</h4>
                </div>
                <div>
                    <img className=' w-24 lg:w-48' src={quote} alt='' />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                {review.map(reviews =><Review reviews={reviews}></Review>)}
            </div>
        </section>
    );
};

export default Tastimonial;