const myMongo = require('mongodb').MongoClient //using mongo driver
const url = 'mongodb://localhost:27017'

async function createCollection() {
    try {
        let myData = await myMongo.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }) //connecting to the database
        var myDataBase = myData.db("FullStack")
        await myDataBase.createCollection("Students")
        await myDataBase.createCollection("Groupes")
 
    }catch(err){
        console.log(err)
        myData.close()

    }
}
createCollection()

