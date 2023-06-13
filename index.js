async function postJSON(data) {
try {
   const response = await fetch('json\data.json', {

   method: "POST",
   Headers: {
      "Content-Type": 'application/json',
   },
   body: JSON.stringify(data),
   });     

      const result = await response.json();
      console.log ("Success:", result);
} catch (error) {
      console.error("Error:", error);
   }
}

      const data = { username: "datos" };
      postJSON(data);
   

   // const data = JSON.fetch('json\data.json');
   // console.log (data);

   // let read = [inciales, nombre, integrantes]
   // for (let read = 0; i < data.length; i++){
   //    console.log( data[i]);
   // }
