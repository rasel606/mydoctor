import { postcss } from 'daisyui/src/lib/postcss-prefixer';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loding from '../../Loding/Loding';

const AddDoctors = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('https://doctors-backend.vercel.app//service').then(res => res.json()))

    const imageStorageKey = '8c698e4722e5e0a6b4f659ee9b63f7f5'

    const onSubmit = async data => {

        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }

                    //send to your database
                    fetch(`https://doctors-backend.vercel.app//doctors`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(doctors => {
                            if (doctors.insertedId) {
                                toast.success('Doctor Added Success')
                                reset()
                            }
                        })
                }

            })
        console.log(data.name)
    }
    if (isLoading) {
        return <Loding></Loding>
    }


    return (
        <div>
            <h2 className="text-2xl"> Add a New Doctor</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" class="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is requard'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.name?.type === 'required' && <p >{errors.name.message}</p>}
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>

                    </label>
                    <input type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is requard'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Enter Valid Email' // JS only: <p>error message</p> TS only support string
                            }
                        })}
                    />
                    <label class="label">

                        {errors.email?.type === 'required' && <p >{errors.email.message}</p>}
                        {errors.email?.type === 'pattern' && <p >{errors.email.message}</p>}
                    </label>

                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Specilty</span>
                    </label>
                    <select {...register("specilty")} class="input-bordered select w-full max-w-xs">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}>
                                {service.name}
                            </option>)
                        }


                    </select>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Photo</span>
                    </label>
                    <input type="file" class="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is requard'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.name?.type === 'required' && <p >{errors.name.message}</p>}
                    </label>
                </div>
                <label class="label">
                    {errors.name?.type === 'required' && <p >{errors.name.message}</p>}
                </label>



                <input class="btn w-full max-w-xs" type="submit" value='Add Doctors' />
            </form>
        </div>
    );
};

export default AddDoctors;