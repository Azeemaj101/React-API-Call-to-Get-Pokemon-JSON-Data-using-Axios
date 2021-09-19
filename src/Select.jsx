import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  let a,b,c;
  const rows = [
    createData(a,b,c, 24, 4.0)
  ];

function Select1() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
    let get1 = async ()=>{
        let fec =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${event.target.value}`);
        console.log(fec.data)
        document.getElementsByClassName("apiname")[0].innerText=fec.data.name;
        document.getElementsByClassName("apimove")[0].innerText=fec.data.moves.length;
        document.getElementsByClassName("imgs")[0].src=fec.data.sprites.front_default;
        document.getElementById("table").style.display = "block";
        console.log(fec.data.name)
    }
    get1();
  };
  return (<>
      <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"><CatchingPokemonIcon/>Pokemon Number</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Pokemon Number"
          onChange={handleChange}
        >
          
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={26}>26</MenuItem>
          <MenuItem value={27}>27</MenuItem>
          <MenuItem value={28}>28</MenuItem>
          <MenuItem value={29}>29</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <TableContainer id="table" component={Paper}>
      <Table  className="media" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="name1" style={{color:"white", fontWeight:"bold"}}>Name</TableCell>
            <TableCell align="right" className="move" style={{color:"white",fontWeight:"bold"}}>Moves</TableCell>
            <TableCell align="right" className="move" style={{color:"white",fontWeight:"bold"}}>Picture</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" style={{color:"white", textTransform: "uppercase", fontWeight:"bold"}} scope="row">
              <span className="apiname"></span>
              </TableCell>
              <TableCell align="right"><span className="apimove" style={{color:"white"}}></span></TableCell>
              <TableCell align="right"> <img className="imgs" src="" alt="..."/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  

    </>
  );
}

export default Select1;
