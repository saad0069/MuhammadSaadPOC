class foodDB {
    constructor() {

        // list of food items with prices
        this.food = [
            { id: 1, name: "Pizza", price: 30 },
            { id: 2, name: "Burger", price: 10 },
            { id: 3, name: "Fries", price: 5 },
            { id: 4, name: "Pasta", price: 20 },
            { id: 5, name: "Cake", price: 20 }
        ];
    }
    // Method to return all food items
    getAll() {
        console.log("Getting menu...");
        return this.food;
    }
};

// Create and export the singleton
const db = new foodDB();
module.exports = db;