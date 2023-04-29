import React, { useContext } from 'react';
import logo from '../../../../public/assets/logo.png';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";




const Header = () => {

   

    return (
        <Container>
            <div className="text-center">
                <img className='my-3' src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM, D, YYYY")}</p>
            </div>
            <div className='d-flex bg-light p-3 rounded my-3'>
                <Button className='' variant="danger">Latest</Button>
                <Marquee speed={50}>
                    Match Highlights: Germany vs Spain — as it happened   !  Match Highlights: Germany vs Spain as.................

                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;