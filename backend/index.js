import 'dotenv/config.js'
import express from 'express';
import axios from 'axios';

const app = express();

const port = process.env.PORT || 3000

app.get('/',(req, res)=>{
    res.send('<h1>Server is ready</h1>')
})

app.get('/hell', (req, res) => {
    res.send("why the hell all this created but its interesting")
})

app.get('/api/jokes', (req, res) => {

    const jokes = [
        {
            id: 1,
            title: "Programmer Joke",
            joke: "Why do programmers prefer dark mode? Because light attracts bugs."
        },
        {
            id: 2,
            title: "JavaScript Joke",
            joke: "Why did the JavaScript developer wear glasses? Because he couldn't C#."
        },
        {
            id: 3,
            title: "Database Joke",
            joke: "I told my database a joke. It didn't laugh, but it did return a query result."
        },
        {
            id: 4,
            title: "Frontend Joke",
            joke: "My frontend looks great... until I open it in another browser."
        },
        {
            id: 5,
            title: "Backend Joke",
            joke: "A backend developer walks into a bar, orders a drink, and tests if the bar can handle 10,000 requests."
        }
    ];

    res.send(jokes)
})

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})