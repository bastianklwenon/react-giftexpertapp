import { useState, useEffect } from "react"
import {getGif} from '../helpers/getGift'

export const useFetchGif = (categoria) =>{

    const [state, setstate] = useState({

        data:[],
        loading:true
    });

    useEffect( ()=>{
        getGif(categoria).then(img => {
            setstate({
                data:img,
                loading:false
            })
        })
    },[categoria])

    return state; // {data:[], loading:true}
}