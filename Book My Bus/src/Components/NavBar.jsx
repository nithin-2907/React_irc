import { Button,  Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import icon from "./Images/icon.jpg";
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { useContext } from "react";
import { LogContext } from './LogContext'
export default function NavBar()
{
    let {user, setUser} = useContext(LogContext);
    return(
        <div style={{height:"7vh",color:"black", backgroundColor:"orange"}}>
        <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"row"}>
               <Link style={{padding:15}} to={"/"}><img src={icon} height="40px" width="60px" alt=""></img></Link>
               <Link to={"/book"} style={{display:"flex"}}><LocalHotelIcon color="black" sx={{height:"30px",width:"30px",paddingLeft:4,paddingTop:2}} />
               <Typography variant="body1" style={{textDecoration:"underline orange",color:"black",paddingTop:20,paddingLeft:4,fontWeight:"bold"}}>HOTELS</Typography></Link>
             
            </Stack>
            <Stack direction={"row-reverse"}>
            {user == null ? 
            <>
            <Link to={"/Login"} style={{display:"flex" }}><PersonIcon color="black" sx={{height:"30px",width:"30px",paddingLeft:2,paddingTop:2}} />
            <Typography variant="body1" style={{textDecoration:"underline orange",color:"black",paddingTop:20,paddingLeft:4,paddingRight:10,fontWeight:"bold"}}>LOGIN</Typography></Link>
            <Link to={"/SignUp"} style={{display:"flex"}}><PersonAddAlt1Icon color="black" sx={{height:"30px",width:"30px",paddingLeft:2,paddingTop:2}} />
            <Typography variant="body1" style={{textDecoration:"underline orange",color:"black",paddingTop:20,paddingLeft:4,fontWeight:"bold"}}>NEW USER</Typography></Link> </>:

            <Link to="/"><Button variant="contained" onClick={() => setUser(null)} color="warning" sx={{padding:"10px"}}>LogOut</Button></Link>
            }
            <Link to={"/aboutUs"} style={{display:"flex"}}><Typography variant="body1" style={{textDecoration:"underline orange",color:"black",paddingTop:20,paddingLeft:4,fontWeight:"bold"}}>ABOUT</Typography></Link>
           
            </Stack>
        </Stack>
        </div>
    );
}