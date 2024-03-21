import { Link, useParams } from "react-router-dom"
import axios from "axios"

const Employee = ({employeeList}) => {

    const deleteEmployee = async(id) => {
        await axios.delete(`http://localhost:3000/create/${id}`)
        window.location.reload()
    }
    

    return(
        <div>
            <Link to='/create' className="btn">New Employee</Link>
            {employeeList.map(user => (
                    <div className="employeeContainer" key={user.id}>
                        <div className="displayFlex">
                            <span>{user.fName} {user.lName}</span>
                            <span>{user.email}</span>
                        </div>
                        <Link to={`/update/${user.id}`} className="btn">Update</Link>
                        <button onClick={() =>deleteEmployee(user.id)} className="btn">Delete</button>
                    </div>
            ))}
        </div>
    )
}

export default Employee