import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';


export default function Contactme(){
const [loader,setLoader] = useState(true);
    const [contacme,setContactme] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Contactme')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setContactme(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])

    return(
        <>
<Typography>Name: SHIVANI</Typography>
<Typography>Father Name: RAMESH</Typography>
<Typography>Mother Name: SUJATHA</Typography>
<Typography>Email: shivaniyadagiri9@gmail.com</Typography>
<Typography>Phone No.: 9390980143</Typography>
        </>
        
    )
    }