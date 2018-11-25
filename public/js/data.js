class Data {
    static async view(){
       console.log('static view');
         try{
            const response = await fetch('api', { 
                method: 'GET',
                 headers: {
                    'Content-type': 'application/json'
                },
                credentials: 'same-origin'
               });
               
            const data = await response.json();
            let template =
            `<li>${data[0].id}</li>
            <li>${data[0].name}</li>
            <li><img src="${data[0].image}"/></li>
            <li>${data[0].likes}</li>`
           console.log('data ',data);
            document.querySelector('#panel').innerHTML = template;
            
              }catch (err) {
             throw new Error(err);
      }
    }
}

Data.view();