import {useState } from "react";
const useStateTitle=()=>{
    const [titleroute,setTitleroute]=useState("")
    return {titleroute,setTitleroute}
}
export default useStateTitle;