import React from 'react';

const AvailableServiceDetail = (props) => {
    const {name}=props.makeService
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div class="card-actions justify-center">
                        <h1 className='text-xl font-semibold text-secondary text-regular'>{name}</h1>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AvailableServiceDetail;