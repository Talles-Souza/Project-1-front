import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';
function CardHome({img,name}) {
  return (
    <div className='div-margin'>
    <Card className='card'>
      <Card.Img className='body-img' variant="top" src={img}/>
      <Card.Body>
        <Card.Title className='card-title'>{name}</Card.Title>
      </Card.Body>
    </Card>
    </div>
  );
}

export default CardHome;