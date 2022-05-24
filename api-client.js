const getTasks = async function () {
    console.log("test")
    const apiUrl = `http://localhost:3000` 
        try {
            const response = await fetch(apiUrl, { method: "GET", headers: {
                "Content-Type": "application/json" }
             });
            const data = await response.json();
            console.log(data[0].description);
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

 

    const postTask = async function (value) {
        const data = {description: value, done:false}
        console.log(data);
        const apiUrl=`http://localhost:3000`
        try {
            const response = await fetch(apiUrl, { 
                method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        });
        
            const result = await response.json();
            return result;
        } catch (error) {
            console.log(error);
        }
        };


        
    
        const deleteTask = async function (id) {
            const apiUrl=`http://localhost:3000/`
            try{
            const response = await fetch(apiUrl + id, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            });
            const data = await response.json();
            return data
        } catch (error) {
            console.log(error);
        }
        }
    
          
       









//     const data = {description: "buy oatmeal", done: false};
//     const apiUrl=`http://localhost:3000`
// fetch(apiUrl, {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//       "Content-Type": "application/json",
//   },
// });


  