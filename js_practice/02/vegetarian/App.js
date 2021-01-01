function vegetarianMenu(menu) {
    const menuNode = document.querySelector('#menu');
    const vegetarianOptions = menu.filter(
        (option)=> option.isVegetarian === true
    );

    vegetarianOptions.forEach((option)=>{
        let dish = document.createElement("li");
        dish.textContent = option.name;
        menuNode.appendChild(dish);
    });
}

const menu  =[
    {
        "name": "spaghetti carbonara",
        "isVegetarian" : false,
    },
    {
        "name": "Caprese Pasta Salad",
        "isVegetarian" : true,
    },
    {
        "name": "Spicy Kale and Coconut Fried Rice",
        "isVegetarian" : true,
    },
    {
        "name": "Tempura Don",
        "isVegetarian" : false,
    },
    {
        "name": "Tempura Ramen",
        "isVegetarian" : false,
    },
    {
        "name": "Chicken Katsu Donburi",
        "isVegetarian" : false,
    },
    {
        "name": "Extra Vegetable Fried Rice",
        "isVegetarian" : true,
    },
    {
        "name": "Best Lentil Soup",
        "isVegetarian" : true,
    },
    {
        "name": "Crispy Baked Falafel",
        "isVegetarian" : true,
    },
    {
        "name": "Gyudon",
        "isVegetarian" : false,       
    }
]

vegetarianMenu(menu);