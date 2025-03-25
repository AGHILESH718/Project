import mongoose from "mongoose"

const DataBase = (url) => {
    try{
        mongoose.connect(url)
        const data = mongoose.connection
        data.once('open',() =>{
            console.log('DataBase Connected Successfully...!!!');
        })
    }catch(error){
        console.log(error);
        
    }
}

export default DataBase