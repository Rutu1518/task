import React, { useEffect, useState } from "react";
import toast,{Toaster}  from "react-hot-toast";
import axios from "axios";
import UserCard from "../../conponents/UserCard/UserCard";
import "./Home.css"

function Home() {

    
    const [user , setUser]= useState([])


    const loaduser= async () =>{

        toast.loading("Data is Loading")
       
        const response = await axios.get(`https://66bc25e724da2de7ff6972f6.mockapi.io/users`);
        setUser(response.data);  
        toast.dismiss()       
       
        toast.success("Data Fetched Successfully") 
       
    }
    useEffect(()=>{
            loaduser()
        },[]
    )

    return(
        <div className="card-container">
          
        {user.map((user)=>{
            const{id, name, avatar} = user;
            return(
                <UserCard 
                key={id}              
                name={name}
                avatar={avatar}
                />
            )
        })}
         <Toaster/>
        </div>
       
        
    )
   
}

export default Home
