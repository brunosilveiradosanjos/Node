const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    console.log('Connected')

    const db = client.db(databaseName)

    db.collection('tasks').insertMany([
        {
            desccription: 'Study',
            completed: true
        },
        {
            desccription: 'Work',
            completed: true
        },
        {
            desccription: 'Sleep',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks')
        }

        console.log(result.ops)
    })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Michael',
    //         age: 31
    //     }, {
    //         name: 'Suellen',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertOne({
    //     name: 'Giovana',
    //     age: 30
    // }, (error, result) => {
    //     if (error) {
    //         return ('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })
})