class Data{
    static async view(){
       /* const response = await fetch('http://localhost:4000/api/people', 
        { 
            method: 'GET',
             headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Accept-Language, Content-Language'

            },
           credentials: 'same-origin'
           });
           */
        const response = await axios.get('http://localhost:4000/api/people');  
         
        document.querySelector('#panel').innerHTML = JSON.stringify(response.data);
    }
}