import React from "react"
const Users=(props)=>
{
   let data= props.data
    return(
<div>
    <table border="2px" style={{textAlign:"center",fontWeight:"bold"}}>
        <tr>
            <th>Name</th>
            <th>USN</th>
            <th>Branch</th>
            <th>YOP</th>
            <th>CGPA</th>
            <th>Picture</th>
            <th>PHONE</th>
        </tr>
        {data.map((x)=>{
            return <tr style={{color:"purple",fontFamily:"monospace"}}>
                <td>{x.Name}</td>
                <td>{x.USN}</td>
                <td>{x.Branch}</td>
                <td>{x.YOP}</td>
                <td>{x.CGPA}</td>
                <td><img src={x.Picture} alt="" style={{height:"100px",width:"100px"}} /></td>
                <td>
                    <ol>
                        {x.PHONE.map((x)=>{
                            return <li>{x}</li>
                        })}
                    </ol>
                </td>
            </tr>
        })}
    </table>
</div>
    )
}
export default Users;