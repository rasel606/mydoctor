import React from 'react';
import { format } from 'date-fns';

import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';


const BookingModal = (props) => {
    const { treatment, date, setTreatment, refetch } = props
    const { _id, name, slots } = treatment
    const formattedDate = format(date, 'PP')
    const [user] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.displayName,
            patientEmail: user.email,
            patientPhone: event.target.phone.value

        }

        fetch('https://doctors-backend.vercel.app//booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.seccess) {
                    toast(`appoinment is set, ${formattedDate} at ${slot}`)
                } else {
                    toast.error(`Already have a Appoinment is set, ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch()
                setTreatment(null)
            })
    }



    return (
        <div>




            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">

                <div class="modal-box ">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary mb-10 text-center">{name}</h3>

                    <form className='grid grid-cols-1 gap-5 justify-items-center ' onSubmit={handleBooking}>
                        <input type="text" value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' placeholder="Pesant Name" class="input input-bordered w-full max-w-xs" />
                        <input type="tel" name='phone' placeholder="phone" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" class=" btn btn-accent" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;