const { Pool } = require('pg')
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  
const  view =  async ()=>{
    let client = await pool.connect(); 
    try{
      const { rows } = await client.query('SELECT * FROM languages');
      return rows;
    }finally{
      await client.release();
    }
  }

module.exports = {view};
