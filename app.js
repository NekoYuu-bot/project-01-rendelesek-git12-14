const orders=[

    {
        id:1,
        pizza: "Hawaii",
        extra:"",
        ital: "Pepsi 0",
        ar: "2000Ft",
        kep: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

   
    {
        id:2,
        pizza: "Songoku",
        extra:"",
        ital: "Ásványvíz",
        ar: "1750Ft",
        kep: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id:3,
        pizza: "Pikáns",
        extra:"",
        ital: "Nestea",
        ar: "1800Ft",
        kep: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id:4,
        pizza: "Bologna",
        extra:"",
        ital: "Pepsi 0",
        ar: "1700Ft",
        kep: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id:5,
        pizza: "Korfu",
        extra:"Olivabogyó",
        ital: "Pepsi",
        ar: "2340Ft",
        kep: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id:6,
        pizza: "Húsimádó",
        extra:"hagyma",
        ital: "fanta",
        ar: "2000Ft",
        kep: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }


];

const result = document.getElementById("result");

let output ="";

orders.map(pizza =>{

    output+=`
    <div class="order">

    <div>
    <img src="${pizza.kep} alt="${pizza.pizza}" />
    </div>
    <h3>${pizza.pizza}</h3>
    <hr>
    <h4>Ár: ${pizza.ar}</h4>
    <p>Extra: ${pizza.extra}</p>
    <p>Ital: ${pizza.ital}</p>
    </div>

    `;
})

result.innerHTML = output;
