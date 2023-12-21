import { Button, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";

export default function SignUpPage()
{
    let Sign = SignUp();
    return(
        <div  style={{backgroundColor:"gray",height:"100vh" ,display:"flex", justifyContent:"center",alignItems:"center"}}>
            <Paper style={{alignItems:"center"}} variant='elevation' square={false} sx={{height:"650px",width:"700px", display: "flex",flexDirection:"column"}}>
                <Typography variant="h4" sx={{mt:5,mb:4,color:"darkorange"}}>SignUp to BookMyBus</Typography>
                <div>
                    <TextField inputRef={Sign.fnameRef} label="First Name" style={{paddingRight:4}} color="warning"></TextField>
                    <TextField inputRef={Sign.lnameRef} label="Last Name" color="warning"></TextField>
                </div>
                <TextField  inputRef={Sign.numberRef} color='warning' sx={{mt:4 , mb:5 ,width: 400, maxWidth: '100%',}}  label="Enter phone number" type={"tel"} 
                    InputProps={{startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                    }}></TextField>
                <TextField inputRef={Sign.emailRef} color='warning' sx={{ mb:4,width: 400, maxWidth: '100%',}} label="Enter email" type={"email"} ></TextField>
                <TextField inputRef={Sign.passRef} color='warning' sx={{ mb:4,width: 400, maxWidth: '100%',}} label="Enter password" type={"password"} ></TextField>
                <Link to='/'><Button  variant="contained" sx={{width:400}} color="warning">Sign up for free</Button></Link>
                {Sign.error && <Typography variant="body1" style={{paddingTop:"30px"}} color={"darkorange"} >{Sign.error}</Typography>}
                <Typography variant="subtitle2" style={{padding:"20px"}}>By clicking the “Sign up for free” button, you are creating an account, <br/>and agree to BookMyBus Terms of Service and Privacy Policy.</Typography>
            </Paper>
        </div>
    );
}

