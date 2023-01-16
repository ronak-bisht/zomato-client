import axios from "axios"

 
  
  var data
    axios.get('https://zomato-server.onrender.com/restaurants').then((res)=>{
        
         data=res.data
    })
             
      export default data  
      
     


