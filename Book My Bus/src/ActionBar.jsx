import { Autocomplete, Button, TextField} from "@mui/material";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';
import { Link } from "react-router-dom";
let opt = ["DEL - New Delhi","BOM - Mumbai","HYD - Hydrabad","BLR - Bangalore","CHE- Chennai","GOI - Goa","BPL - Bhopal","KCH - Kochi","LUC - Lucknow"];
let num = [1,2,3,4,5];
export default function ActionBar()
{
    return(
        <div style={{display:"flex",alignItems:"center",height:"15vh",width:"175vh",marginTop:150, backgroundColor:"white"}}>
        <Autocomplete
        id="From"
        freeSolo
        sx = {{width : "200px",padding:2, color:"darkorange"}}
        options={opt.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="From" />}
      />
        <CompareArrowsIcon sx={{height:"50vh"}}/>
      <Autocomplete
        id="To"
        freeSolo
        sx = {{width : "200px",padding:2, color:"darkorange"}}
        options={opt.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="To" />}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDateRangePicker  calendars={1} slotProps={{
              textField: ({ position }) => ({
              label: position === 'start' ? 'Departure' : 'Return',
            }),
          }}/>
      </LocalizationProvider>
      <Autocomplete
        id="From"
        freeSolo
        sx = {{width : "200px",padding:1,paddingRight:3,paddingLeft:2, color:"darkorange"}}
        options={num.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="Number of Passengers" />}
      />
      <Link to="/Result"><Button variant="contained"  color="warning" style={{width:"200px"}}>Submit</Button></Link>
        </div>
    );
}