import { Button, FormControlLabel, Paper, Radio, RadioGroup, TextField, Typography} from '@mui/material';
import { useState } from 'react';
import SecurityIcon from '@mui/icons-material/Security';
import PaymentsIcon from '@mui/icons-material/Payments';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import InputAdornment from '@mui/material/InputAdornment';
import { useContext } from 'react';
import { LogContext } from './LogContext';
import { useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
export default function LoginPage()
{
    let passRef = useRef();
    let numberRef = useRef();
    let emailRef = useRef();
    let [logType,setLogType] = useState("email");
    let [error,setError] = useState("");
    let [type,setType] = useState("Email");
    let [info,setInfo] = useState("");
    let navigate = useNavigate();
    function CheckIfValid()
    {
        if(type === "number" && numberRef.current.value === "")
        {
            setError("Number cannot be Empty");
            return;
        }
        if(type === "email" && emailRef.current.value=== "")
        {
            setError("Email cannot be Empty");
            return;
        }
        if(passRef.current.value === "")
        { 
            setError("Password cannot be Empty");
            return;
        }
        if(logType === "email")
        {
            axios.get(`http://localhost:8000/users?email=${emailRef.current.value}`).then((res) =>{
            if(res.data[0].password !== passRef.current.value)
            {
                setError("Invalid Password");
                return;
            }else{
                navigate("/");
                setUser(res.data[0].firstName)
            }
        })
        }else{
            axios.get(`http://localhost:8000/users?number=${numberRef.current.value}`).then((res) => {
            if(res.data[0].password !== passRef.current.value)
            {
                setError("Invalid Password");
                return;
            }else{
                navigate("/home");
                setUser(res.data[0].firstName);
            }
        })
        }
    }
    function handleType()
    {
        type === "Email" ? setType("Phone") : setType("Email");
        logType === "email" ? setLogType("number") : setLogType("email");
        setInfo("")
    }
    let {user,setUser} = useContext(LogContext);
    return(
        <div  style={{backgroundColor:"gray",height:"100vh" ,display:"flex", justifyContent:"center",alignItems:"center"}}>
            <Paper variant='elevation' square={false} sx={{height:"600px",width:"850px", display: "flex"}}>
                <div style={{height:"600px", backgroundColor:"darkorange",width:"35vh",}}>
                <div style={{display:"flex"}}>
                <SecurityIcon sx={{height:"60px",ml:5,mt:7,mr:1, width:"60px",}}/>
                <Typography variant='h' sx={{mt:8}}>Trusted by over <br/> 100 million users</Typography>
                </div>
                <div style={{display:"flex"}}>
                <PaymentsIcon sx={{height:"60px",ml:5,mt:7,mr:1, width:"60px",}}/>
                <Typography variant='h' sx={{mt:8}}>Fast and <br/> Secure Payments</Typography>
                </div>
                <div style={{display:"flex"}}>
                <CurrencyRupeeIcon sx={{height:"60px",ml:5,mt:7,mr:1, width:"60px",}}/>
                <Typography variant='h' sx={{mt:8}}>Save on Every <br/> Booking</Typography>
                </div>
                <div style={{display:"flex"}}>
                <BusinessCenterIcon sx={{height:"60px",ml:5,mt:7,mr:1, width:"60px",}}/>
                <Typography variant='h' sx={{mt:8}}>Manage Trips,fare alerts predictions</Typography>
                </div>
                </div>
                <form style={{padding:"50px"}}>
                    <Typography  variant='h5' sx={{color:"darkorange", mb:2}}>Login to BookMyBus</Typography>
                    <RadioGroup  name="login-Type" value = {type} onChange={handleType}>
                        <FormControlLabel value ="Phone" control={<Radio/>} label={"Mobile Number"}></FormControlLabel>
                        <FormControlLabel value = "Email" control={<Radio/>} label={"Email"}></FormControlLabel>
                    </RadioGroup>
                    {type == "Phone" ?  <TextField inputRef={numberRef} value={info} onChange={(event) =>setInfo(event.target.value)} color='warning' sx={{mt:5 , mb:5}}  label="Enter phone number" type={"tel"} fullWidth variant='standard' 
                    InputProps={{startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                    }}></TextField> :
                    <TextField color='warning'inputRef={emailRef} onChange={(event) =>setInfo(event.target.value)} sx={{mt:1 , mb:2}} label="Enter email" type={"email"} fullWidth variant='standard' ></TextField>
                    }
                    <TextField color='warning' inputRef={passRef} sx={{mt:2 , mb:5}} label="Enter password" type={"password"} fullWidth variant='standard' ></TextField>
                    <Link to={'/'}><Button  fullWidth variant='contained' color='warning'>Login</Button></Link>
                    {error && <Typography variant="h5" color="darkorange">{error}</Typography>}
                    <Typography variant='subtitle2'>By logging in, I understand & agree to BookMyBus's terms of use and privacy policy*.</Typography>
                </form>
            </Paper>
        </div>
    );
}
