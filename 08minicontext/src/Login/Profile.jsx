import React ,{useContext}from "react";
import Usercontext from "../Context/Usercontext";

export default function Profile() {
    const {user}=useContext(Usercontext);
    if (!user) return <div>Please login</div>;
    return <div>Welcome {user.name}</div>

    }