import express from 'express';


var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send("Hello from V-spider's server")
})

app.get('/about', (req, res) => {
    res.send("Hello from V-spider's server!!!")
})

app.listen(3000, () => {
    console.log('app running of port 3000')
})