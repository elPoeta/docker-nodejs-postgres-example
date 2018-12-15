class Data{
    static async view(){
     
        const response = await fetch('http://localhost:4000/api/people', { method: 'GET'});
       // const data = JSON.parse(await response.text());
        document.querySelector('#panel').innerHTML = await response.text();
    }
}