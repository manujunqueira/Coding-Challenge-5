// Task 1 - Create an Inventory Array of Product Objects

const inventory = [
    { name: `Latte`, price: 7, quantity: 4 },
    { name: `Capuccino`, price: 6, quantity: 7 },
    { name: `Macchiato`, price: 8, quantity: 8 },
    { name: `Black Coffe`, price: 5, quantity: 10 }
    ];


// Task 2 - Create an Orders Array of Order Objects

let orders = []; // Create an empty array to store customer orders

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
        items: [orderedItem],
        status: 'pending'
    }; //created a new order with the requested object properties 

    orders.push(newOrder);     //use push method to add newOrder to the empty array
    console.log("Order placed:", newOrder);
    return newOrder;
};

placeOrder("Beyonce", { name: 'Capuccino', quantity: 1 });


// Task 4 - Create a Function to Calculate Total for an Order

function calculateOrderTotal(order){
    return order.items.reduce((total, item) => {
        let product = inventory.find(p => p.name === item.name); // condition
        return total + (product.price * product.quantity); // return price*quantity plus total value of the order 
    }, 0);
}


// Task 5 - Create a Function to Mark an Order as Completed

function completeOrder(customerName){
    let customerOrder = orders.find(order => order.customerName === customerName); //using find method to search for the customer name in the orders array

    if (customerOrder) {
        customerOrder.status = `Completed`;
        console.log(`The order for ${customerName} is completed.`); // If the order is found, it will log a massage saying the order is completed
    } else {
        console.log(`ERROR: order for ${customerName} was not found.`); // If the the order is not found, it will log an error message
    }
};

//check if function is working
completeOrder(`Beyonce`); //Output: The order for Beyonce is completed.
completeOrder(`Markum`); //Output: ERROR: order for Markum was not found.

// Task 6 - Create a Function to Check Pending Orders


function checkPendingOrders() {
    
    let pendingOrders = orders.filter(order => order.status === "pending"); // Filter the orders array to get only orders with the status "Pending"

    if (pendingOrders.length > 0) { // Check if there are any pending orders
        console.log("Pending Orders:");

        pendingOrders.forEach(order => {  // Iterate over each pending order
    
            console.log(`Customer: ${order.customerName}`);
            console.log("Items:"); // Log the customer's name and their ordered items

            order.items.forEach(item => {
                console.log(`- ${item.quantity}x ${item.name}`);
            });

            console.log(`Status: ${order.status}`);  // Log the current status 
        });
    } else {
        console.log("No pending orders."); // If no pending orders, log this message
    }
}

//check function by creating sample orders 

let sampleOrder = { 
    customerName: 'Jack',
    items: [{name: 'macchiato', quantity: 2}],
    status: 'pending'
};

let sampleOrder2 ={
    customerName: 'Deja',
    items: [{name: 'Black Coffee', quantity: 1}],
    status: 'completed'
};

orders.push(sampleOrder, sampleOrder2); // add orders to the orders array

checkPendingOrders(); //chack for pending orders