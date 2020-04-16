// CRUD create read update delete

const mongodb = require('mongodb')
const MongoCliente = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoCliente.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log(error)
        return console.log('Unable to connect to database!')
    }

    console.log('Connected corretly!')

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: 'Bruno',
        age: 28

    })

})





// sudo /Users/banjos77/mongodb/bin/mongod --dbpath=/Users/banjos77/mongodb-data/