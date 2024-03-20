import { Link } from "react-router-dom"

const Employee = ({employeeList}) => {

    return(
        <div>
            <Link to='/create' className="btn">New Employee</Link>
            <div>
                <span>First Last</span>
                <span>Email</span>
                <Link to='/update' className="btn">Update</Link>
                <button className="btn">Delete</button>
            </div>
            {employeeList.map(user => (
                    <div>
                        <span>{user.fName} {user.lName}</span>
                        <span>{user.email}</span>
                        <Link to='/update' className="btn">Update</Link>
                        <button className="btn">Delete</button>
                    </div>
            ))}
        </div>
    )
}

export default Employee