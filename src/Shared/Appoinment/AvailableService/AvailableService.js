import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loding from '../../Loding/Loding';
import BookingModal from '../BookingModal/BookingModal';
import AvailableServiceDetail from './AvailableServiceDetail';
import AvailableServiceSlot from './AvailableServiceSlot';


const AvailableService = ({ date }) => {
    const formattedDate = format(date, 'PP')

    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://doctors-backend.vercel.app//available?date=${formattedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loding></Loding>
    }


    // useEffect(() => {
    //     const url =`https://doctors-backend.vercel.app//available?date=${formattedDate}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])

    return (
        <div className='m-14'>
            <div className='items-center justify-center mt-14'>
                <h2 className='text-center text-xl  text-secondary'>Available Services on {format(date, 'PP')}</h2>
                <p></p>
            </div>

            <div className='mt-14'>
                <div className=' items-center justify-center '>

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 '>
                        {
                            services?.map(service => <AvailableServiceDetail key={service._id} makeService={service}></AvailableServiceDetail>)
                        }
                    </div>


                </div>
            </div>

            <div className=' mt-14'>
                <p className='text-center text-xl  text-secondary'>Available slots for Teeth Orthodontics.</p>
            </div>
            <div className='mt-14'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                    {
                        services.map(service => <AvailableServiceSlot key={service._id} setTreatment={setTreatment} makeService={service}></AvailableServiceSlot>)
                    }
                </div>
                {treatment && <BookingModal setTreatment={setTreatment} refetch={refetch} date={date} treatment={treatment}></BookingModal>}
            </div>

        </div>
    );
}
// key={service._id} makeService={service}


export default AvailableService;