const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost:8012',
    user: 'root',
    password: ' ',
    database: 'amesa'
})

app.get('/trial', (req, res)=>{
    const sqlInsert = "INSERT INTO servicecategory (serviceCategoryName) VALUES ('new');"
    db.query(sqlInsert, (err, result)=> {
        res.send("hello world")
    })
   
})


app.listen(3001, ()=>{
    console.log('server running on port 3001')
})