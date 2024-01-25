import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Alert, Modal, ModalBody, ModalHeader, ModalFooter, Button, InputGroup, InputGroupText, Input } from "reactstrap"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addAnnonce } from '../../../redux/actions/actionservice';
import './Addan.css';

function Addannonce() {
 const [image, setImage] = useState("");
 const [field, setField] = useState("");
 const [description, setDescription] = useState("");
 const [rating, setRating] = useState("");
 const [price, setPrice] = useState("");
 const [offer, setOffer] = useState("");
 const [isOpen, setIsOpen] = useState(false);

 const dispatch = useDispatch();

 const handleModal = () => {
    setIsOpen(!isOpen);
 };

 const handleSubmit = () => {
    const newService = { image, field, description, rating, price, offer };
    dispatch(addAnnonce(newService));
    handleModal();
 };

 return (
    <>
      {!isOpen && <button onClick={handleModal} className="add-annonce-button">Add Annonce</button>}

      <Modal
        className="register-modal"
        isOpen={isOpen}
        onRequestClose={handleModal}
      >
    <ModalHeader >add a new annonce</ModalHeader>
    <ModalBody>
         <InputGroup>
        <Input  placeholder="image" onChange={(e) => setImage(e.target.value)} />
        </InputGroup>
        <InputGroup>
        <Input  placeholder="field" onChange={(e) => setField(e.target.value)} />
        </InputGroup>
        <InputGroup>
        <Input  placeholder="description" onChange={(e) => setDescription(e.target.value)} />
        </InputGroup>
        <InputGroup>
        <Input  placeholder="rating" onChange={(e) => setRating(e.target.value)} />
        </InputGroup>
        <InputGroup>
        <Input  placeholder="price" onChange={(e) => setPrice(e.target.value)} />
        </InputGroup>
        <InputGroup>
        <Input  placeholder="offer" onChange={(e) => setOffer(e.target.value)} />
        </InputGroup>
        </ModalBody>
        <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>SUBMIT</Button>
        <Button onClick={handleModal}>CLOSE</Button>
        </ModalFooter>
      </Modal>
    </>
 );
}

export default Addannonce;