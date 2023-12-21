import { Box, Button, Stack} from '@mui/material';
import Grid from '@mui/material/Grid';
import Container, { containerClasses } from '@mui/material/Container';
import Paper from'@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
// import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import '../h.css';
export default function HotelPage()
{
    return(
<Box sx={{backgroundColor:"lightgray"}}>
            <Container > 
              <Grid container spacing={8} padding={15}>
            
                <Stack direction="row">
                <Grid item xs={4} spacing={15} padding={3}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                  <img src='https://wallpaperaccess.com/full/3014694.jpg' alt='hel' style={{width:"100%",height:"328px"} }></img>
                  </Paper>
                  <Button variant="contained" endIcon={<SendIcon />}><center>RESERVE</center></Button>
                </Grid>

                <Grid item xs={4} spacing={8} padding={0.7}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                    <h3>1)Mabruk Restaurant</h3><br></br>
                    <Rating name="size-medium" defaultValue={5} />&nbsp;&nbsp;&nbsp;&nbsp;Reviews:100+&nbsp;&nbsp;&nbsp;&nbsp;Open Now<br/><br/>
                     <h7>Lebanese, Mediterranean</h7><br></br><br></br><br></br>
                     <hr/>
                     "had couscous in mains."<br/>
                     "Best lebanese food and excellent service" 
                     <br></br><br/><hr/>
                     ₹1000 - ₹10,000<br></br><br></br>
                     <AddIcCallIcon></AddIcCallIcon>Call&nbsp;&nbsp;&nbsp;&nbsp;
                     <AddLocationIcon></AddLocationIcon>Location
                  </Paper>
                </Grid>
                
                </Stack>
                <Stack direction="row">
                <Grid item xs={4} spacing={15} padding={3}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                  <img src='https://wallpaperaccess.com/full/261576.jpg' style={{width:"100%",height:"328px"}}></img>
                  </Paper>
                  <Button variant="contained" endIcon={<SendIcon />}><center>RESERVE</center></Button>
                 </Grid>

                <Grid item xs={4} spacing={8} padding={0.7}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                    <h3>2)Fiona Restaurant</h3><br></br>
                    <Rating name="size-medium" defaultValue={3} />&nbsp;&nbsp;&nbsp;&nbsp;Reviews:10+&nbsp;&nbsp;&nbsp;&nbsp;Open Now<br/><br/>
                     <h7>Italian, Chinese₹₹₹₹</h7><br></br><br></br>
                     <hr/>

                     The in room dining staff is excellent Total commitment and professionalism...<br/><br/>
                   Excellent 
                     <br></br><hr/>
                     ₹100 - ₹1000<br></br><br></br>
                     <AddIcCallIcon></AddIcCallIcon>Call&nbsp;&nbsp;&nbsp;&nbsp;
                     <AddLocationIcon></AddLocationIcon>Location
                  </Paper>
                </Grid>

                </Stack>
                <Stack direction="row">
                <Grid item xs={4} spacing={15} padding={3}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                  <img src='https://wallpaperaccess.com/full/261648.jpg' style={{width:"100%",height:"328px"}}></img>
                  </Paper>
                  <Button variant="contained" endIcon={<SendIcon />}><center>RESERVE</center></Button>
                </Grid>

                <Grid item xs={4} spacing={8} padding={0.7}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                    <h3>3)Celini Restaurant</h3><br></br>
                    <Rating name="size-medium" defaultValue={3} />&nbsp;&nbsp;&nbsp;&nbsp;Reviews:50+&nbsp;&nbsp;&nbsp;&nbsp;Open Now<br/><br/>
                     <h7>Italian, Pizza ₹₹-₹₹₹₹</h7><br></br><br></br>
                     <hr/>
                     "First I got to know about this place was through a Doctor, I Googled and found..."<br/>
"After Dinner"
                     <br></br><br/><hr/>
                     ₹1000 - ₹10,000<br></br><br></br>
                     <AddIcCallIcon></AddIcCallIcon>Call&nbsp;&nbsp;&nbsp;&nbsp;
                     <AddLocationIcon></AddLocationIcon>Location
                  </Paper>
                </Grid>
                </Stack>
                <Stack direction="row">
                <Grid item xs={4} spacing={15} padding={3}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                  <img src='https://wallpaperaccess.com/full/261604.jpg' style={{width:"100%",height:"328px"}}></img>
                  </Paper>
                  <Button variant="contained" endIcon={<SendIcon />}><center>RESERVE</center></Button>
                  </Grid>

                <Grid item xs={4} spacing={8} padding={0.7}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                    <h3>4)Tanatan Restaurant</h3><br></br>
                    <Rating name="size-medium" defaultValue={4} />&nbsp;&nbsp;&nbsp;&nbsp;Reviews:150+&nbsp;&nbsp;&nbsp;&nbsp;Open Now<br/><br/>
                     <h7>Indian, Bar₹₹ - ₹₹₹</h7><br></br><br></br><br></br>
                     <hr/>
                     "... fresh pepper, hint of green chili, citrus, salt & a splash of soda made i..."
                      "In dessert we ordered Matka rabdi gulab..."
                     <br></br><br/><hr/>
                     ₹500 - ₹2,000<br></br><br></br>
                     <AddIcCallIcon></AddIcCallIcon>Call&nbsp;&nbsp;&nbsp;&nbsp;
                     <AddLocationIcon></AddLocationIcon>Location
                  </Paper>
                </Grid>
                </Stack>
                <Stack direction="row">
                <Grid item xs={4} spacing={15} padding={3}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                  <img src='https://wallpaperaccess.com/full/4834863.jpg' style={{width:"100%",height:"328px"}}></img>
                  </Paper>
                  <Button variant="contained" endIcon={<SendIcon />}><center>RESERVE</center></Button>
                   </Grid>

                <Grid item xs={4} spacing={8} padding={0.7}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                    <h3>5)Puppys Restaurant</h3><br></br>
                    <Rating name="size-medium" defaultValue={5} />&nbsp;&nbsp;&nbsp;&nbsp;Reviews:100+&nbsp;&nbsp;&nbsp;&nbsp;Open Now<br/><br/>
                     <h7>Indian, InternationalIndian,₹₹-₹₹₹₹</h7><br></br><br></br><br></br>
                     <hr/>
                     
                    "Street food dinner"<br/>
                    "... is good , Special thanks to miss Ra..."
                     <br></br><br/><hr/>
                     ₹1000 - ₹6000<br></br><br></br>
                     <AddIcCallIcon></AddIcCallIcon>Call&nbsp;&nbsp;&nbsp;&nbsp;
                     <AddLocationIcon></AddLocationIcon>Location
                  </Paper>
                </Grid>
                </Stack>
                <Stack direction="row">
                <Grid item xs={4} spacing={15} padding={3}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                  <img src='https://wallpaperaccess.com/full/4834850.jpg' style={{width:"100%",height:"328px"}}></img>
                  </Paper>
                  <Button variant="contained" endIcon={<SendIcon />}><center>RESERVE</center></Button>
              </Grid>

                <Grid item xs={4} spacing={8} padding={0.7}>
                  <Paper sx={{width:"500px",height:"328px",color:"black",backgroundColor:"Whitesmoke"}}>
                    <h3>6)Almas Restaurant</h3><br></br>
                    <Rating name="size-medium" defaultValue={5} />&nbsp;&nbsp;&nbsp;&nbsp;Reviews:100+&nbsp;&nbsp;&nbsp;&nbsp;Open Now<br/><br/>
                     <h7>Indian, Asian₹₹ - ₹₹₹</h7><br></br><br></br><br></br>
                     <hr/>
                     "Thai, is a dish made with succulent prawns cooked in a fragrant and creamy cu..."
                      "... a bit taste of chili and in Cocktai..." 
                     <br></br><br/><hr/>
                     ₹1000 - ₹8,000<br></br><br></br>
                     <AddIcCallIcon></AddIcCallIcon>Call&nbsp;&nbsp;&nbsp;&nbsp;
                     <AddLocationIcon></AddLocationIcon>Location
                  </Paper>
                </Grid>
                </Stack>
                

                
              </Grid>
            </Container>
            </Box>);
}