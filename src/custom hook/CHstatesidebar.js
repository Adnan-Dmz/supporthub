import { useEffect, useState } from "react";
const useStatesidebar=()=>{
     const [showsidebar,setsidebar]=useState(()=>{
      const savesadebar=localStorage.getItem("start-sadebar");
      return savesadebar !== null ? JSON.parse(savesadebar) : false;
     })
     useEffect(()=>{
           localStorage.setItem("start-sadebar",JSON.stringify(showsidebar))
     },[showsidebar])
     const changesidebar=()=>{
       setsidebar((prev)=>!prev)
     }
     return {showsidebar,changesidebar}
}
export default useStatesidebar;