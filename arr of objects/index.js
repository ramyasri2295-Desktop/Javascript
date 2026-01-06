let products=[
{
    name:"Ramya",
    instock:true,
    dicount:"10%",
    price:20,
    id:1
},
{
    name:"Ram",
    instock:true,
    dicount:"20%",
    price:50,
    id:2
},
{
    name:"priya",
    instock:true,
    dicount:"60%",
    price:80,
    id:3
},
{
    name:"Riya",
    instock:true,
    dicount:"40%",
    price:70,
    id:4
}
]
// for(i=0;i<products.length;i++){
//     let product=products[i];
//     console.log(product);

// }


// for(i=0;i<products.length;i++){
//     console.log(products[0]);
//     console.log(products[1]);
//     console.log(products[2]);
//     console.log(products[3]);

// }



let message=document.getElementById("element");
for(i=0;i<products.length;i++){
    let product=products[i]; 
    message.innerHTML +=`
    <div class="cards">
            <p>name:${product.name}</p>
            <p>instock:${product.instock}</p>
            <p>price:${product.price}</p>
            <p>discount:${product.dicount}</p>
            <button onclick="submit(${product.id})">add to cart</button>
           

    </div>
    ` ;
 console.log(product);
 } 
 
    function submit(id){
       for(i=0;i<products.length;i++){
        if(products[i].id===id){
           cart +=`
           <tr>
              <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                <td>${products[i].dicount}</td>
                <td>${products[i].instock}</td>
              </tr>

           `;
        }
         }
         table();
    }

    function table(){
        document.body.innerHTML+=`
        <table border="1">
        <tr>
            <th>name</th>
            <th>price</th>
            <th>discount</th>
            <th>instock</th>
        </tr>   
        ${cart}
        </table>
        `;
    }
        