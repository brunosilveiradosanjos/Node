const express = require('express')
require('./db/mongoose')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express()
const port = process.env.PORT || 3000

// automatically parse incoming jason to an object 
// so we can access it in our request handlers
app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Port is up on p ort ' + port)
})

const bcryptjs = require('bcryptjs')
const myFunction = async () => {
    const password = 'Red12345!'
    const hashedPassword = await bcryptjs.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcryptjs.compare('Red12345!', hashedPassword)

    console.log(isMatch)
}

myFunction()