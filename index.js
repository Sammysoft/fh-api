import express from 'express';
import   _connectDB    from './config/db.js';

const app = express();
const port = process.env.PORT || 8089;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
    _connectDB();
});