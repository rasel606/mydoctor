import React, { useEffect, useState } from 'react';
import { Head } from 'react-day-picker';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const MyAppoinment = () => {
    const [appoinment, setAppoinment] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://doctors-backend.vercel.app//mybooking?patientEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()

                })
                .then(data => {
                    setAppoinment(data)

                })
        }
    }, [])


    return (
        <div>
            <h2>my appoinment</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>NAME</th>
                            <th>DATE</th>
                            <th>TIME</th>
                            <th>treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appoinment.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <th>{a.patient}</th>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;