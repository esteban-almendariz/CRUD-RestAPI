const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'employeeList'
})

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    const q = 'SELECT * FROM employee'
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/create', (req, res) => {
    const q = 'INSERT INTO employee(fName, lName, email) VALUES(?)'
    const values = [
        req.body.fName,
        req.body.lName,
        req.body.email
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json('New employee was created!')
    })
})

app.put('/create/:id', (req, res) => {
    const employeeId = req.params.id 
    const q = `UPDATE employee SET fName = ?, lName= ?, email= ? WHERE id = ?`
    const values = [
        req.body.fName,
        req.body.lName,
        req.body.email
    ]

    db.query(q, [...values, employeeId], (err, data) => {
        if(err) return res.json(err)
        return res.json('Employee has been updated!')
    })
})

app.delete('/create/:id', (req, res) => {
    const employeeId = req.params.id 
    const q = `DELETE FROM employee WHERE id = ?`

    db.query(q, [employeeId], (err, data) => {
        if(err) return res.json(err)
        return res.json('Employee has been deleted!')
    })
})



app.listen(3000, ()=> {
    console.log('Server running on port 3000 from express server')
})

