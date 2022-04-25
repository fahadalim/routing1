import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UserDetails = ()=>{
    const {id} =useParams();
    const [user,setUser] = useState({})
    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/${id}`).then(({data})=>{
            setUser(data.data)
        })
    })
    return (
    <div>
         <div>User Id:{id}</div>
         <div>first name:{user.first_name}</div>
    </div>
    )
}