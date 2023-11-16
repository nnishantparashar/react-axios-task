import { useEffect, useContext } from "react";
import axios from "axios";
import { useState } from "react";
import User from "../User/User";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { SessionContext } from "../../App";
import './Home.css'

const Home = () => {
  const { setUsers } = useContext(SessionContext);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");

  const handleClose = () => clearData();
  const handleShow = () => setShow(true);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  };
  const websiteChangeHandler = (event) => {
    setWebsite(event.target.value);
  };
  const companyChangeHandler = (event) => {
    setCompany(event.target.value);
  };
  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };

  const API = "https://mock-user-api.onrender.com/users";

  useEffect(() => {
    axios.get(API).then((res) => {
      if (res.data.message === "Users have been retrieved successfully.") {
        setUsers(res.data.data);
      }
    });
  }, [setUsers]);

  const clearData = () => {
    setShow(false);
    setName("");
    setUsername("");
    setEmail("");
    setAddress("");
    setCompany("");
    setPhone("");
    setCompany("");
  };

  const userData = {
    name: name,
    username: username,
    email: email,
    address: address,
    phone: phone,
    website: website,
    company: company,
  };

  const addUserHandler = () => {
    console.log(userData);
    axios
      .post(API, userData)
      .then((res) => {
        if (res.data.message === "User have been added successfully.") {
          window.location.reload();
          
        }
      })
      .catch((err) => {
        alert("Error: ", err.message);
      });
    clearData();
  };

  return (
    <div>
      <h2>User Data</h2>
      <div className="addUser">
        <Button onClick={handleShow}> + Add User</Button>
      </div>
      
      <div>
        <User />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={nameChangeHandler}
                  placeholder="Enter name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  onChange={usernameChangeHandler}
                  placeholder="Enter username"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  onChange={emailChangeHandler}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  onChange={phoneChangeHandler}
                  placeholder="877-00-999"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Website</Form.Label>
                <Form.Control onChange={websiteChangeHandler} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Company</Form.Label>
                <Form.Control onChange={companyChangeHandler} />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={addressChangeHandler}
                placeholder="1234 Main St"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addUserHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
