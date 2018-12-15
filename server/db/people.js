const pool = require('./connection');

class Peopledb{
   
    static async viewAll(){
        let client = await pool.connect(); 
        
        try{ 
        
            const people = await client.query('select * from people', []); 
         
            return people.rows;
        
        }catch(error){
            return new Error('error');
        }
        finally{
          
          await client.release();
        }
    } 
    
}  

module.exports = Peopledb;