import { useState } from "react"

function EmployeeList(){
   const[empdata,setEmpdata]=useState([])
   useEffect(()=>{
       fetch()
   })
const report=data.map((item)=><h2>{item.name}</h2>)
const age1=data.map((item)=><h1>{item.age}</h1>)
return(
    <>
    <h1>Eployee List</h1>
    {report}
    <h1>Eployee Age</h1>
    {age1}
    </>
)
}
export default EmployeeList