function GetGroupProject() {
   try {
      fetch('json/data.json', {
         method: "GET",
         headers: {
            "Accept": 'application/json',
         },

      })
         .then(response => response.json())
         .then(response => console.log(JSON.stringify(response)))
   } catch (error) {
      console.error("Error:", error);
   }
}
GetGroupProject();
