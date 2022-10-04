const express = require('express')
const app = express()
const cors = require('cors')
//const PORT = process.env.PORT || 3000

//middleware 
app.use(express.json())//req.body
app.use(cors());

const{Pool} = require('pg')
const pool = new Pool({
    user:'Melvinn',
    password:'halo123',
    host:'localhost',
    port: 5432,
    database:'goals'

}); 


//ROUTES// 

app.get('/goals', async (req, res)=>{
    try {
       const {rows} = await pool.query('SELECT * FROM goals');
       res.send(rows); 
    } catch (error) {
        console.log(error.message);
    }
});

app.get('/goals/:id', async (req,res)=>{
    try {
        const {id} = req.params
        const {rows} = await pool.query('SELECT * FROM goals WHERE id = $1', [id])
        res.send(rows);
    } catch (error) {
        console.log(error.message);
    }
});



app.post('/goals', async (req,res)=>{
    const {goals} = req.body;
    try {
        const {rows} = await pool.query('INSERT INTO goals (goals) VALUES($1) RETURNING *', [goals])
        res.send(rows);
    } catch (error) {
        console.log(error.message);
    }
});

app.put('/goals/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const {goals} = req.body; 
        const {rows} = await pool.query('UPDATE goals SET goals = $1 WHERE id = $2', [goals, id]);
        res.send(rows);
    } catch (error) {
        console.log(error);
    }
});

app.delete('/goals/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        await pool.query('DELETE FROM goals WHERE id = $1', [id])
        res.json('Todo has been deleted')
    } catch (error) {
        console.log(error);
    }
});




app.listen(5000,()=>{
    console.log('listening to port', 5000)
})