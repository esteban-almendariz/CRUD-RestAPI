import { useState } from "react"
import { Link } from "react-router-dom"


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

    return (
        <div>
            <Link to='/' className="btn">Back</Link>
            <form>
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