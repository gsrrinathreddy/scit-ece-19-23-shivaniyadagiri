import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';


export default function Certifications(){
const [loader,setLoader] = useState(true);
    const [certifications,setCertifications] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/certifications')
    
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setCertifications(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])

    return(
        <>
<Typography>Certifications: Image processing using matlab</Typography>
        </>
        
    )
    }