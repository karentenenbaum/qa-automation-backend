const express = require('express')
const app = express()
const port = 4000

//register
app.post('/user', (req, res) => {
  console.log(req);
  res.json({result: 'success'});
})

//login  
app.put('/user', (req, res) => {

    var user = req.params
    res.json({result: 'success'})
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})