const{
    createPool
}=require('mysql');
const pool = createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"demo",
    connectionLimit:11
})
pool.query('select* from burn_and_swap where id = ?',[11],(err,result,field)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})