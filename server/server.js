const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'employeeList'
})

app.get('/', (req, res) => {
    const q = `SELECT * from employees`
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    } )
})

app.post('/create', (req, res) => {
    const q = `INSERT INTO employees(fName, lName, email) VALUES(?)`
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

app.listen(3000, () => {
    console.log('listening...')
})