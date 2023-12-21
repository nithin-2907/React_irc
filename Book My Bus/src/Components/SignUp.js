import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignUp ()
{
    let navigate = useNavigate();
    let numberRef = useRef();
    let emailRef = useRef();
    let passRef = useRef();
    let fnameRef = useRef();
    let lnameRef = useRef();
    let pattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    let [error,setError] = useState("");
    function addUser()
    {
        if(fnameRef.current.value === "")
        {
            setError("First name cannot be Empty");
            return;
        }
        if(lnameRef.current.value === "")
        {
            setError("Last name cannot be Empty");
            return;
        }
        if(numberRef.current.value === "")
        {
            setError("Number cannot be Empty");
            return;
        }
        if(emailRef.current.value=== "")
        {
            setError("Email cannot be Empty");
            return;
        }
        if(!emailRef.current.value.match(pattern))
        {
            setError("Invalid Email adress")
            return;
        }
        if(passRef.current.value === "")
        {
            setError("Password cannot be Empty");
            return;
        }
        axios
        .post("http://localhost:3000/users",{
            firstName: fnameRef.current.value,
            lastName: lnameRef.current.value,
            number : numberRef.current.value,
            email : emailRef.current.value,
            password : passRef.current.value}).then(() => console.log("Successful"));
        navigate("/");
        
    }
    return {numberRef,fnameRef,lnameRef,emailRef,passRef,error,addUser};
}