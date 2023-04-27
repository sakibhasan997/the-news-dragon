import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBeer, FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { title, details, _id, image_url, author, total_view, rating } = news
    return (
        <>
            <Card className=" mb-5">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                    <div className='ps-2 flex-grow-1'>
                        <p className='mb-0'>{author?.name}</p>
                        <p className='mb-0'>{moment(author?.published_date).format('yyy, MM, D')} </p>
                    </div>
                    <div className='d-flex flex-column gap-2'>
                        <FaRegBookmark />
                        <FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={image_url} alt="Card image" />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 250)}.... <Link className='text-blue text-decoration-underline' to={`/news/${_id}`}>Read More</Link> </>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                        <Rating
                            placeholderRating={rating.number}
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar  />}
                            fullSymbol={<FaStar className='text-warning'/>}
                        />
                        <span>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye /> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </>
    );
};

export default NewsCard;