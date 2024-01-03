import { useEffect, useState } from "react"

export const useFetch = (url)=>{
    const [data,setData]=useState(null)
    useEffect(()=>{
        fetch(url).then(res=>{
            res.json().then(result=>{
                // console.log("result")
                // console.log(result)
                setData(result.products)
            })
        })
    },[]);
    return data;
}