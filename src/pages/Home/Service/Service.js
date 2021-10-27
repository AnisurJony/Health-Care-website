import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { name, description, img, id } = service;

    return (
        <div className="col">

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary" className=" btn-style"><Link to={`/servicedetails/${id}`}>Check Details</Link></Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;