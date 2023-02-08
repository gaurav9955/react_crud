import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Show() {
    const [users, setUsers] = useState([]);

    async function fetchAllUsers(){
        const result = await axios.get('http://localhost:5000/users');
        console.log(result.data);
        setUsers(result.data);
    }
    useEffect(()=>{
        fetchAllUsers();
    },[])

    
  return (
    <>
      <table className='table table-dark'>
      <thead>
        <tr>
            <th>EMPLOYEE ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>CITY</th>
            <th>ACTION</th>
        </tr>

        </thead>
        <tbody>
            {
                users.map(obj=>{
                    return(

                <tr>
                <td>{obj.eid}</td>
                <td>{obj.fname}</td>
                <td>{obj.lname}</td>
                <td>{obj.city}</td>
                <td>
                    <a><button>UPDATE</button></a>
                    <a><button>DELETE</button></a>
                </td>
            </tr>
                );
            })
        }
            </tbody>  
      </table> 
    </>
  )
}

export default Show
