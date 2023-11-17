'use client'
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';

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