import { Table, TableCell, TableHead, TableRow, } from "@mui/material";

export default function Action({from,to,fDate,ADate,pass})
{
    return(
    <div style={{height:"100px",display:"flex",justifyContent:"center" ,padding:"150px", alignItems:"center"}}>
        <Table>
            <TableHead>
                <TableRow>
                    
                    <TableCell>BUS NAME</TableCell>
                    <TableCell>DATE and TIME Of DEPARTURE</TableCell>
                    <TableCell>DATE and TIME  Of ARRIVAL</TableCell>
                    <TableCell>AC/NON AC</TableCell>
                    <TableCell>AMOUNT</TableCell>
                </TableRow>
            </TableHead>
            <TableRow>
               
                <TableCell>YBM Travels</TableCell>
                <TableCell>12-21-2023  00.30</TableCell>
                <TableCell>12-22-2023 02.30</TableCell>
                <TableCell>NON AC</TableCell>
                <TableCell>Rs.2500</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Intercity</TableCell>
                <TableCell>12-21-2023  01.30</TableCell>
                <TableCell>12-22-2023 03.05</TableCell>
                <TableCell>AC</TableCell>
                <TableCell>Rs.3500</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Komban</TableCell>
                <TableCell>12-21-2023 23.30</TableCell>
                <TableCell>12-22-2023 01.00</TableCell>
                <TableCell>NON AC</TableCell>
                <TableCell>Rs.2700</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>NYZ TRAVELS</TableCell>
                <TableCell>12-21-2023 23.30</TableCell>
                <TableCell>12-22-2023 01.00</TableCell>
                <TableCell>AC</TableCell>
                <TableCell>Rs.3700</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>SS CABS</TableCell>
                <TableCell>12-21-2023 23.30</TableCell>
                <TableCell>12-22-2023 01.00</TableCell>
                <TableCell>NON AC</TableCell>
                <TableCell>Rs.2700</TableCell>
            </TableRow>
        </Table>
    </div>
    );
}