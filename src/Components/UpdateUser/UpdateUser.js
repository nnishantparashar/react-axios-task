import { Button, Form, Modal, Col, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const UpdateUser = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(props.user.name);
  const [username, setUsername] = useState(props.user.username);
  const [email, setEmail] = useState(props.user.email);
  const [phone, setPhone] = useState(props.user.phone);
  const [website, setWebsite] = useState(props.user.website);
  const [company, setCompany] = useState(props.user.company);
  const [address, setAddress] = useState(props.user.address);

  const handleClose = () => setShow(false);
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

  const updateData = {
    name: name,
    username: username,
    email: email,
    address: address,
    phone: phone,
    website: website,
    company: company,
  };

  const clearData = () => {
    setShow(false);
    setName("");
    setUsername("");
    setEmail("");
    setAddress("");
    setWebsite("");
    setPhone("");
    setCompany("");
  };

  const UpdateAPI = "https://mock-user-api.onrender.com/users";
  const updateUserHandler = (i) => {
    console.log("_id : ", i);
    console.log(updateData);
    console.log("UPDATE API : ", UpdateAPI + `/${i}`);
    axios
      .put(UpdateAPI + `/${i}`, updateData)
      .then((res) => {
        if (res.data.message === "User have been updated successfully.") {
          handleClose();
          clearData();
          window.location.reload();
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <Button onClick={(i) => handleShow(props.user)}>Update</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={nameChangeHandler}
                  placeholder="Enter name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
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
                  value={email}
                  onChange={emailChangeHandler}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  value={phone}
                  onChange={phoneChangeHandler}
                  placeholder="877-00-999"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Website</Form.Label>
                <Form.Control value={website} onChange={websiteChangeHandler} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Company</Form.Label>
                <Form.Control value={company} onChange={companyChangeHandler} />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={address}
                onChange={addressChangeHandler}
                placeholder="1234 Main St"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={(i) => updateUserHandler(props.user._id)}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateUser;
