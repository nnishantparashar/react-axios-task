import { Table } from "react-bootstrap";
import { SessionContext } from "../../App";
import { useContext } from "react";
import UpdateUser from "../UpdateUser/UpdateUser";
import DeleteUser from "../DeleteUser/DeleteUser";

const User = () => {
  const { users } = useContext(SessionContext);
  

  return (
    <div>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company}</td>
              <td>{user.address}</td>
              <td>
                <span>
                  <UpdateUser user={user}/>
                </span>{" "}
                <span>
                <DeleteUser user={user}/>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
     
    </div>
  );
};

export default User;
