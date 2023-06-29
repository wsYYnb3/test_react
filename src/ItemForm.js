import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemForm({ onAddItem }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && price && imageUrl && description) {
          onAddItem({ name, price, imageUrl, description });
          setName('');
          setPrice('');
          setImageUrl('');
          setDescription('');
        } else {
          alert('Please fill out all fields before adding an item.');
        }
    };
  

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" value={price} onChange={e => setPrice(e.target.value)} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="url" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={description} onChange={e => setDescription(e.target.value)} />
      </Form.Group>

      <Button className="my-custom-button" type="submit" >Add</Button>
    </Form>
  );
}

export default ItemForm;
