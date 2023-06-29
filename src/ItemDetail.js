import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemDetail({ item }) {
  return (
    <div>
      <h3>Item Details</h3>
      <Card>
        <Card.Img variant="top" src={item.imageUrl} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>Price: {item.price}</Card.Text>
          <Card.Text>Description: {item.description}</Card.Text> 
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;
