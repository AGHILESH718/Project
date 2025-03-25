import express from 'express'
import router from './Router.js';
import DataBase from './DataBase.js';

const App = express();
const port = 4001;

DataBase("mongodb://127.0.0.1:27017/Dataset")

App.use(express.json())
App.use('/prep',router);

App.listen(port,()=>{
  console.log(`The server is http://localhost: ${port}`);
})