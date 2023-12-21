import Pics from "./Home/Pics";
import giveSlide from "./Home/Slide";
import plane from "./Home/Screenshot_2023-12-20_223338-removebg-preview.png";
import { Typography } from "@mui/material";
import ActionBar from "../ActionBar";
import FFooter from "../Footer";

export default function Body()
{
    const crntSlide = giveSlide(Pics);

    return (
        <>
        <div style={{display:"flex", justifyContent:"center",alignItems:"center", height:"95vh",backgroundImage: `url(${Pics[crntSlide].pic})`,backgroundSize:"250vh",backgroundRepeat:"no-repeat",opacity:"75%",backgroundPositionY:"60%" }}>
            <img style={{height:"25vh", position:"absolute",top:"100px"}} src = {plane} alt="."/>
            <Typography style = {{position: "absolute" , top:"180px",right:"100px"}}variant="h4">{Pics[crntSlide].name}</Typography>
            <ActionBar></ActionBar>
        </div>
        <FFooter></FFooter>
        </>
    );
}