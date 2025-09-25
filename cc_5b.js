// In class coding challenge 5b

// Starter Data
// Esports Arena catalog (price per unit)
const products = [
  { id: 201, name: "Pro Mouse (wired)",   category: "gear",    price: 39.99 },
  { id: 202, name: "Team Jersey",         category: "apparel", price: 49.5  },
  { id: 203, name: "Energy Drink 6-pack", category: "snacks",  price: 12.0  },
  { id: 204, name: "Arena Day Pass",      category: "access",  price: 15.0  },
  { id: 205, name: "Switchable Keycaps",  category: "gear",    price: 19.0  }
];

// Example cart (product & quantity)
const cart = [
  { productId: 202, qty: 1 },
  { productId: 203, qty: 2 },
  { productId: 204, qty: 1 },
  { productId: 205, qty: 1 }
];

// Try: "regular", "student", "member", or "vip"
const customerType = "member";

// Category Discounts
function getCategoryDiscount(category) {
    switch(category) {
        case "gear" : 
            return 0.10; // 10% off gear
            break;
        case "apparel" : 
            return 0.15 // 15% off apparel
            break;
        case "snacks" : 
            return 0.08 // 8% off snacks
            break;
        case "access" : 
            return 0.05 // 5% off access
            break;
        default : 
            return 0.00 
            break;
    }
}
        
console.log(getCategoryDiscount("gear"))

