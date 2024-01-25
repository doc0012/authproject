import React, { useState } from 'react'
import { Alert, Modal, ModalBody, ModalHeader, ModalFooter, Button, InputGroup, InputGroupText, Input } from "reactstrap"
import { loginUser, registeUser } from '../../redux/actions/authactions'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import './LogM.css'

function LoginModal() {
 const [modal, setModal] = useState(false)
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const toggle = () => {
    setModal(!modal)
 }
 const errors = useSelector((state) => state.err)
 const dispatch = useDispatch()
 const navigate = useNavigate()
 const handleLogin = () => {
    const formdata = { email, password }
    dispatch(loginUser(formdata, navigate))
 }
 return (
    <div>
      <Button color="transparent" onClick={toggle}>
        Login
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="register-modal">
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody >
          <InputGroup >
            <Input placeholder="email" onChange={(event) => setEmail(event.target.value)} />
            <InputGroupText className="exam">
              @example.com
            </InputGroupText>
          </InputGroup>
          <InputGroup >
            <Input placeholder="password" type="password" onChange={(event) => setPassword(event.target.value)} />
          </InputGroup>
          <InputGroup >
            {errors && (
              <Alert color="danger" >
                {errors.map((err) => (
                 <div>{err.msg}</div>
                ))}
              </Alert>
            )}
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleLogin} >
            Login
          </Button>
          <Button color="secondary" onClick={toggle} >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
 )
}

export default LoginModal