import React from 'react';
import qzone1 from '../../../../public/assets/qZone1.png'
import qzone2 from '../../../../public/assets/qZone2.png'
import qzone3 from '../../../../public/assets/qZone3.png'
import './QZone.css';
import { Button } from 'react-bootstrap';

const QZone = () => {
    return (
        <div >
            <div className='bg-light text-center my-4 py-4'>
                <h4>Q-Zone</h4>
                <div>
                    <img src={qzone1} alt="" />
                    <img src={qzone2} alt="" />
                    <img src={qzone3} alt="" />
                </div>
            </div>
            <div className='bg-style text-center py-4'>
                <h1 className=' text-light pt-5 font-bold'>Create an Amazing Newspaper</h1>
                <p className='text-light py-3'>Discover thousands of <br /> options, easy to <br /> customize layouts, one- <br />
                 click to import demo <br />  and much more.</p>
                 <Button className='' variant="danger">Learn More</Button>
            </div>
        </div>
    );
};

export default QZone;