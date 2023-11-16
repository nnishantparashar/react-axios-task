import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

const DeleteUser = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const DeleteAPI = "https://mock-user-api.onrender.com/users"

    const deleteUserHandler = (i) => {
      console.log("_id : ", i);
      
      console.log("Delete Api : ", DeleteAPI+`/${i}`)
      axios.delete(DeleteAPI+`/${i}`)
      .then((res) =>{
        if(res.data.message === "User have been deleted successfully."){
          handleClose();
          window.location.reload();
        }
      })
      .catch((err) => {
        alert(err.message)
      })
      
  
    };

    return (
        <div>
             <Button onClick={handleShow}>Delete</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Are you sure want to delete user?</p>
        </Modal.Body>
        <Modal.Footer>
        <Button
            variant="primary"
            onClick={handleClose}
          >
           No
          </Button>
          <Button
            variant="primary"
            onClick={(i) => deleteUserHandler(props.user._id)}
          >
           Yes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );

}

export default DeleteUser;