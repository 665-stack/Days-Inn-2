import React from 'react';
import './Rooms.css'
import singleBed from '../../image/Beds/singlebed.jpg'
import doubleBed from '../../image/Beds/doublebed.jpg'
import largeBed from '../../image/Beds/largeBed.jpg'

const Rooms = () => {
    return (
        <div className='rooms'>
            <h2 className='rooms-title'>Type Of Rooms </h2>
            <div className='room-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                <div>
                    <img src={singleBed} alt="" />
                    <h4>Single Room</h4>
                    <p>Price: 1000 tk/per night</p>
                    <button>Book Now</button>
                </div>
                <div>
                    <img src={doubleBed} alt="" />
                    <h4>Duable Room</h4>
                    <p>Price: 2500 tk/per night</p>
                    <button>Book Now</button>
                </div>
                <div>
                    <img src={largeBed} alt="" />
                    <p>Price: 5000 tk/per night</p>
                    <h4>Family Room</h4>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Rooms;