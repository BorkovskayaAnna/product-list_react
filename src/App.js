import React from 'react';
import ProductCardsList from './containers/ProductCardsList';
import Modal from './components/Modal';
import './App.css';

const App = () => (
    <Modal>
        <ProductCardsList />
    </Modal>
)

export default App;
