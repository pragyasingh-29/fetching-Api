fetch('https://fakestoreapi.com/products').then((data)=>{
    //console.log(data);
    return data.json();
}).then((completedata)=>{
      //console.log(completedata[2].title);
       let data="";
       completedata.map((values)=>{ 
 
          data +=`
          <div class="cards col-md-4 mb-5   mt-5">
              <h1 class="fs-6">${values.title}</h1>
              <img src="${values.image}" height="600px" width="500px" alt="" class="img-fluid shadow p-3 mb-5 mt-5">
              <p>${values.description}</p>
              <p class="category ">${values.category}</p>
              <p class="price">${values.price}</p> </div></div>`
       });
   document.getElementById("rows").innerHTML= data;
}).catch((err)=>{
    console.log(err);
});
            


//.then(json=>console.log(json))