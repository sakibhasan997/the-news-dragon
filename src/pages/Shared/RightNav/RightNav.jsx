import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle,FaFacebookF,FaTwitter,FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <h4 className='my-3'>Login With</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>
            <div className='my-5'>
                <h4 className='my-3'>Find Us On</h4>
                <ListGroup >
                    <ListGroup.Item> <FaFacebookF/> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <QZone/>
            </div>
        </div>
    );
};

export default RightNav;