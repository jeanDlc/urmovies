import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { useRouter } from 'next/router';

const Buscador = () => {
  
  const router=useRouter();
  const [busqueda, setBusqueda]=useState('');
    const buscar=e=>{
        e.preventDefault();
        
        if(busqueda.trim()===''){
          return;
        }
        //realizar busqueda
        const busq=busqueda;
        setBusqueda('');
        router.push({
          pathname:'/search/[string]',
          query:{string:busq}
        });
    }
    return ( 
        <form onSubmit={buscar} >
            <TextField id="buscador" 
                fullWidth={true} 
                type='text' 
                label="Movies" 
                variant="filled"  
                size='medium' 
                value={busqueda} 
                onChange={e=>setBusqueda(e.target.value)}
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