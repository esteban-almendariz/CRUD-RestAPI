import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CreateEmployee from './CreateEmployee'
import './App.css'
import Employee from './Employee'
import axios from 'axios'

function App() {
  
  const [employee, setEmployee] = useState([])

  useEffect(() => {
    const fetchEmployees = async() => {
      const res = await axios.get('http://localhost:3000/')
      setEmployee(res.data)
    }
    fetchEmployees()
  }, [])

  console.log(employee)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Employee employeeList={employee}/>}/>
        <Route path='/create' element={<CreateEmployee />}/>
      </Routes>
    </Router>
  )
}

export default App
