import React, { useState } from 'react'
import { Alert, Modal, ModalBody, ModalHeader, ModalFooter, Button, InputGroup, InputGroupText, Input } from "reactstrap"
import { registeUser } from '../../redux/actions/authactions'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import './RegM.css'

function RegisterModal() {
 const [modal, setModal] = useState(false)
 const [email, setEmail] = useState("")
 const [name, setName] = useState("")
 const [lastName, setLastName] = useState("")
 const [password, setPassword] = useState("")
 const [isAnnouncer, setIsAnnouncer] = useState(false);
 console.log(isAnnouncer,"announcerrrrrr")


 const toggle = () => {
    setModal(!modal)
 }
 const dispatch = useDispatch()
 const navigate = useNavigate()
 const isAuth = useSelector((state) => state.auth.isauth)
 const errors = useSelector((state) => state.auth.err)

 const handleRegister = () => {
    const formdata = { name, email, password, lastName , role:  isAnnouncer ? 'annoncer' : 'user',
  };
    dispatch(registeUser(formdata, navigate))

    if (isAuth === true) {
      toggle()
    }
 }

 return (
    <div>
      <Button color="transparent" onClick={toggle}>
        register
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="register-modal">
        <ModalHeader toggle={toggle}>Se connecter</ModalHeader>
        <ModalBody>
          <form>
            <InputGroup>
              <Input placeholder="name" onChange={(event) => setName(event.target.value)} />
            </InputGroup>
            <InputGroup>
              <Input placeholder="lastName" onChange={(event) => setLastName(event.target.value)} />
            </InputGroup>
            <InputGroup>
              <Input placeholder="email" onChange={(event) => setEmail(event.target.value)} />
              <InputGroupText className="exam">
                @example.com
              </InputGroupText>
            </InputGroup>
            <InputGroup>
              <Input placeholder="password" type="password" onChange={(event) => setPassword(event.target.value)} />
            </InputGroup>
            <InputGroup>
              {errors && (
                <Alert color="danger">
                 {errors.map((err) => (
                    <div>{err.msg}</div>
                  ))}
                </Alert>
              )}
            </InputGroup>

            <InputGroup>
              <label>
                <input
                  type="checkbox"
                  checked={isAnnouncer}
                  onChange={() => setIsAnnouncer(!isAnnouncer)}
                  aria-label="controlled"
                />
                bussiness partner
              </label>
            </InputGroup>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleRegister}>
            register
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
 )
}

export default RegisterModal