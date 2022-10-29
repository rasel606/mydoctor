import React from 'react';
import PrimaryBtn from '../../PrimaryBtn/PrimaryBtn';

const AvailableServiceSlot = (props) => {
    const {makeService,setTreatment}=props
    const {name,slots}=makeService

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div class="card-actions justify-center">
                        <h1 className='text-xl font-semibold text-secondary text-regular'>{name}</h1>
                        
                    </div>
                    <p className='text-center'>{
                        slots.length>0
                        ?<span>{slots[0]}</span>
                        :<span>No Service Avaiable</span>
                        }</p>
                    <p className='text-center'>{slots.length} {slots.length>1 ?'spaces': 'space'}</p>
                    <div className='flex justify-center items-center'>
                    <label for="booking-modal" class="flex justify-center items-center"
                       
                        onClick={()=> setTreatment(makeService)} disabled={slots.length === 0} className='btn btn-secondary'>BOOK APPOINTMENT</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableServiceSlot;