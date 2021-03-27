import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
const Buscador = () => {
    const buscar=e=>{
        e.preventDefault();
        console.log('buscando');
    }
    return ( 
        <form onSubmit={buscar} >
            <TextField id="buscador" fullWidth={true} type='text' label="Movies" color='secondary' variant="filled"  size='medium'
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
        </form>
     );
}
 
export default Buscador;