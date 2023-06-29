import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemList({ items, onSelectItem, onAddItem }) {
  return (
    <div>
      <h3>Items</h3>
      <ListGroup>
        {items.map((item, index) => (
          <ListGroup.Item key={index} action onClick={() => onSelectItem(item)}>
            {item.name}
            <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button className="my-custom-button" variant="primary" onClick={onAddItem}>Add New Item</Button>
    </div>
  );
}

export default ItemList;
