import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const UpdateEmployee = ({employeeList}) => {

    const navigate = useNavigate()
    const location = useLocation()
    const employeeId = location.pathname.split('/')[2]
    const user = employeeList.filter(employee => employee.id == employeeId)
    const [filterUser, setFilterUser] = useState(user)

    

    console.log(employeeId)
    console.log(filterUser)

    const [employee, setEmployee] = useState({
        fName:'',
        lName:'',
        email:''
    })

const handleFormChange = (e) => {
    e.preventDefault()
    const {name, value} = e.target
    setEmployee(prevState => {
        return {
        ...prevState, [name]: value 
    }})
}

const handleFormSubmit = async(e) => {
    e.preventDefault()
    try{
        await axios.put(`http://localhost:3000/create/`+ employeeId, employee)
        
        navigate('/')
        window.location.reload()
    } catch(err) {
        console.log(err)
    }
}

    return (
        <div>
            <Link to='/' className="btn">Back</Link>
            <form onSubmit={handleFormSubmit}>
                <h3>Update Employee</h3>
                <input 
                    type="text"
                    placeholder="First Name"
                    name="fName"
                    value={employee.fName}
                    onChange={handleFormChange}
                />
                <input 
                type="text"
                    placeholder="Last Name"
                    name="lName"
                    value={employee.lName}
                    onChange={handleFormChange}
                />
                <input 
                type="email"
                    placeholder="Email"
                    name="email"
                    value={employee.email}
                    onChange={handleFormChange}
                />
                <button className="btn">Submit</button>
            </form>
        </div>
    )

    // const { id } = useParams()
    // const user = employeeList.filter(employee => employee.id == id)
    // const [filterUser, setFilterUser] = useState(user)
    // const navigate = useNavigate()

    // console.log('user', filterUser)
    // console.log('id:', typeof(id))

    
    // const handleFormChange = (e) => {
    //     e.preventDefault()
    //     const {name, value} = e.target
    //     setFilterUser(prevState => {
    //         return [{
    //         ...prevState, [name]: value 
    //     }]})
    // }
    
    // const handleFormSubmit = async(e) => {
    //     e.preventDefault()
    //     try{
    //         await axios.put(`http://localhost:3000/create/`+ parseInt(id), filterUser)
    //         navigate('/')
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    //     console.log(`form submitted`)
        
    // }

    // return (
    //     <div>
    //         <Link to='/' className="btn">Back</Link>
    //         <div>
    //             <h3>Update Employee</h3>
    //             <input
    //                 type="text"
    //                 placeholder="First Name"
    //                 name="fName"
    //                 value={filterUser[0].fName}
    //                 onChange={handleFormChange}
    //             />
    //             <input 
    //                 type="text"
    //                 placeholder="Last Name"
    //                 name="lName"
    //                 value={filterUser[0].lName}
    //                 onChange={handleFormChange}
    //             />
    //             <input 
    //                 type="email"
    //                 placeholder="Email"
    //                 name="email"
    //                 value={filterUser[0].email}
    //                 onChange={handleFormChange}
    //             />
    //             <button  onClick={handleFormSubmit} className="btn">Submit</button>
    //         </div>
        
    //     </div>
    // )
}

export default UpdateEmployee