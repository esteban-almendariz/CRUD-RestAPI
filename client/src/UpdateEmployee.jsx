import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const UpdateEmployee = ({employeeList}) => {

    const navigate = useNavigate()
    const location = useLocation()

    const employeeId = location.pathname.split('/')[2]
    const [filterUser, setFilterUser] = useState([])
    

    useEffect(() => {
        const filterEmployeesList = async() => {
            const user = await employeeList.filter(employee => employee.id == employeeId)
            const newUserObject = {
                fName: user[0].fName,
                lName: user[0].lName,
                email: user[0].email
            }
            setFilterUser(newUserObject)
        }
        filterEmployeesList()
    }, [employeeId])

    // console.log('user', filterUser)
    

    
    const handleFormChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setFilterUser(prevState => (
             {
                ...prevState, [name]: value
            }
        ))
        console.log(`filterUser:`,filterUser)
    }
    
    const handleFormSubmit = async(e) => {
        e.preventDefault()
        try{
            await axios.put(`http://localhost:3000/create/`+ parseInt(employeeId), filterUser)
            navigate('/')
        }
        catch(err){
            console.log(err)
        }
        console.log(`form submitted`)
        
    }

    return (
        <div>
            <Link to='/' className="btn">Back</Link>
            <div>
                <h3>Update Employee</h3>
                <input
                    type="text"
                    placeholder="First Name"
                    name="fName"
                    value={filterUser.fName}
                    onChange={handleFormChange}
                />
                <input 
                    type="text"
                    placeholder="Last Name"
                    name="lName"
                    value={filterUser.lName}
                    onChange={handleFormChange}
                />
                <input 
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={filterUser.email}
                    onChange={handleFormChange}
                />
                <button  onClick={handleFormSubmit} className="btn">Submit</button>
            </div>
        
        </div>
    )
}

export default UpdateEmployee