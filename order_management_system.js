// Task 1 - Create an Inventory Array of Product Objects

const inventory = [
    { name: `Latte`, price: 7, quantity: 4 },
    { name: `Capuccino`, price: 6, quantity: 7 },
    { name: `Macchiato`, price: 8, quantity: 8 },
    { name: `Black Coffe`, price: 5, quantity: 10 }
    ];


// Task 2 - Create an Orders Array of Order Objects

let orders = []; // Initialize an empty array to store customer orders

// Each order object will have these properties: customerName (string), items (array of objects), status (string)

console.log(orders);


// Task 3 - Create a Function to Place an Order

function placeOrder(customerName, orderedItem) {
    let product = inventory.find(p => p.name === orderedItem.name); // find product in inventory

    if (!product) {
        return `ERROR: We do not sell ${orderedItem.name}.`; //return error message if the product does not exist in inventory
    }
    if (product.quantity < orderedItem.quantity) {
        return `ERROR: There is insufficient stock for ${orderedItem.name}.`; //return error message if stock is insufficient
    }
    product.quantity -= orderedItem.quantity; //if products exist and there is sufficient stock, subtract them from inventory

     
    let newOrder = {
        customerName: customerName,
        item: orderedItem,
        status: 'pending'
    }; //created a new order with the requested object properties 

    orders.push(newOrder);     //use push method to add newOrder to the empty array
    console.log("Order placed:", newOrder);
    return newOrder;
};

placeOrder("Beyonce", { name: 'Capuccino', quantity: 1 });

