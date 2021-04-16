const express = require('express')
const app = express()
const port = 4000

//register
app.post('/register', (req, res) => {
    console.log('holaaaaa');
    console.log(req);
    res.json({result: 'success'});
})

//login  
app.put('/login', (req, res) => {
    res.json({result: 'success'})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})