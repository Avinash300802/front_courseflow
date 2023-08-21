
import axios from 'axios';
import React,{useEffect,useState} from 'react';

export default function Home() {


    const [users, setUsers] = useState([]);

    // const { id } = useParams();
  
    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("http://localhost:8080/users");
      setUsers(result.data);
      console.log(result)
    };
  
    // const deleteUser = async (id) => {
    //   await axios.delete(`http://localhost:8080/user/${id}`);
    //   loadUsers();
    // };
  return (
    <div className='container'>

        <div className='py-4'>

        <table className="table border shadow" >
  <thead>
    <tr>
      <th scope="col">S.NO</th>
      <th scope="col">Domain Name</th>
      <th scope="col">Name of the course </th>
      <th scope="col">Deadline</th>
      <th scope="col"> Action </th>
    </tr>
  </thead>
  <tbody>
    
  {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                </tr>))}

  </tbody>
</table>
        </div>
    </div>
  )
}
