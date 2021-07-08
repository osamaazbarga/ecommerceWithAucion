const mongoose=require('mongoose')
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true ,
    useFindAndModify: false 
}


mongoose.connect(process.env.DATABASE,connectionParams).then( () => {
    console.log('Connected to database ')
}).catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`)
})