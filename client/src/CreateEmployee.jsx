import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


const CreateEmployee = () => {
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
    try{
        await axios.post(`http://localhost:3000/create`, employee)
        window.location.reload()
    } catch(err) {
        console.log(err)
    }
}

    return (
        <div>
            <Link to='/' className="btn">Back</Link>
            <form onSubmit={handleFormSubmit}>
                <h3>New Employee</h3>
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
}

export default CreateEmployee