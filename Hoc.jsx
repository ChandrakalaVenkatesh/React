 import React from "react";

 const Hoc=(WrappedComponent)=>{
        return(()=>{
           return<WrappedComponent data="helllllooooo"/>
         })
 }
 export default Hoc; 

