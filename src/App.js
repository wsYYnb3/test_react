import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import ItemForm from './ItemForm';
import './App.css'; 

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isAddingItem, setIsAddingItem] = useState(false);

  const handleAddItem = (item) => {
    setItems(prevItems => [...prevItems, item]);
    setSelectedItem(item); 
    setIsAddingItem(false);
  };

  return (
    <Container fluid className="vh-100 app-container bg-dark text-light">
      <Row className="h-100">
        <Col md={4} className="bg-secondary p-4">
          <ItemList
            items={items}
            onSelectItem={setSelectedItem}
            onAddItem={() => setIsAddingItem(true)}
          />
        </Col>
        <Col md={4} className="bg-primary p-4">
          {selectedItem ? (
            <ItemDetail item={selectedItem} />
          ) : (
            <div className="text-center mt-4">
              <h3>No item selected</h3>
              <p>Select an item from the list to view details</p>
            </div>
          )}
        </Col>
        <Col md={4} className="bg-secondary p-4">
          {isAddingItem && (
            <div>
              <h3>Add New Item</h3>
              <ItemForm onAddItem={handleAddItem} />
              <div className="text-right">
                <Button className="my-custom-button" variant="secondary" onClick={() => setIsAddingItem(false)}>Cancel</Button>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
