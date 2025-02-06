// page for only me to view as it will not have a link to it 
// Use Table 
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';

function GuestResponse() {
  const { users, usersState } = useState([])
  const { message, messageState } = useState("")
  const API = ""

  useEffect = async () => {
    try{ 
      usersState(await axios.get(""))
      if(!users){
        messageState("No data found")
      }
    } catch(e) {
      messageState(e.message)
    }
  }

  return (
    <Table classname=''>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          !message ? 
          // users.forEach(user => 
            <tr>user.name </tr>
            // <tr>user.status </tr>
          // })
          : 
          <tr>{message}</tr>
        }
      </tbody>
    </Table>
  );
}

export default GuestResponse