import React, { useEffect, useState } from "react";
import API from "../../utils/API";


function DataArea() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        API.getUsers()
            .then(res => {
                setUsers(res.data.results)
            })
            .catch(err => console.log(err));
    }, []);
    console.log(users)

    return (
        <div className="container">
            {users.map(user => (


<div className="card mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
        <img src={user.picture.thumbnail}></img>
    </div>
    <div className="col-md-8">
      <div className="card-body">
            <h5 className="card-title">{user.name.first} {user.name.last}</h5>
            <ul>
            <li>Gender: {user.gender}</li>
            <li>Location: {user.location.state}, {user.location.city}</li>
            <li>Email: {user.email}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
                    ))}
        </div>
            )
}

            export default DataArea;