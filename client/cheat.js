import { useState } from 'react';
import ReactModal from 'react-modal';
import { Alert, Modal, ModalBody, ModalHeader, ModalFooter, Button, InputGroup, InputGroupText, Input } from "reactstrap"
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { editAnnonce } from '../../../redux/actions/actionservice';
import { useNavigate } from 'react-router-dom';
import './Editan.css';

function Editannonce({ el }) {
 let [isOpen, setIsOpen] = useState(false);
 const [image, setImage] = useState(el.image);
 const [field, setField] = useState(el.field);
 const [description, setDescription] = useState(el.description);
 const [rating, setRating] = useState(el.rating);
 const [price, setPrice] = useState(el.price);
 const [offer, setOffer] = useState(el.offer);

 const handleModal = () => {
    setIsOpen(!isOpen);
 };
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const editHanlder = () => {
    const Service = { image, field, description, rating, price, offer };
    console.log(Service, 'testttt');
    dispatch(editAnnonce(el._id, Service));
    handleModal();
    navigate('/getall');
 };

 return (
    <div>
      <Button onClick={handleModal}>edit</Button>
      <Modal
        className="register-modal"
        isOpen={isOpen}
      >
       
        <ModalHeader >Edit Annonce</ModalHeader>
        <ModalBody>
        <InputGroup>
        <Input  onChange={(el) => setImage(el.target.value)} value={image} />
        </InputGroup>
        <InputGroup>
        <iInput  onChange={(el) => setField(el.target.value)} value={field} />
        </InputGroup>
        <InputGroup>
        <Input    onChange={(el) => setDescription(el.target.value)} value={description} />
        </InputGroup>
        <InputGroup>
        <Input    onChange={(el) => setRating(el.target.value)} value={rating} />
        </InputGroup>

        <InputGroup>
        <Input   onChange={(el) => setPrice(el.target.value)} value={price} />
        </InputGroup>
        <InputGroup>
        <Input   onChange={(el) => setOffer(el.target.value)} value={offer} />
        </InputGroup>
        </ModalBody>
        <ModalFooter>
        <Button onClick={editHanlder}>SUBMIT</Button>
        <Button onClick={handleModal}>CLOSE</Button>
        </ModalFooter>
      </Modal>
    </div>
 );
}

export default Editannonce;