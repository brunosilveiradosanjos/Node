const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    console.log('Connected')

    const db = client.db(databaseName)

    db.collection('tasks').findOne({ _id: new ObjectID("5e990eab3bd36e3b6a095f46") }, (error, task) => {
        if (error) {
            return console.log('Culdnt find taks')
        }
        console.log(task)
    })

    db.collection('tasks').find({ completed: true }).toArray((error, tasks) => {

        console.log(tasks)
    })

    // db.collection('users').findOne({ _id: new ObjectID("5e99002814627b331c20d59e") }, (error, user) => {
    //     if (error) {
    //         return ('error')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     console.log(count)
    // })
})