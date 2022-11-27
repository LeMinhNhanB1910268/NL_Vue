const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        // require: true
    },
    image: {
        type: String,
        // require: true
    },
    genres: {
        type: String,
        // require: true
    },
    price: {
        type: String,
        // require: true
    },

    club: {
        type: String,
        // require: true
    },

})

const cartSchema = new mongoose.Schema({
    userId: { type: String},
    productName: {
        type: String,
    },
    size: {
        type: String,
        // require: true
    },
    namePlayer: {
        type: String,
    },
    number: {
        type: String,
    },
    amount: {
        type: String,
    },
    description: {
        type: String,
    }

})



const promotionSchema = new mongoose.Schema({
    name: {
        type: String,
        // require: true,
    },
    discount: {
        type: String,
        // require: true,
    },
    time: {
        type: String,
        // require: true,
    },
    description: {
        type: String,
    },
    imageUrl: { 
        type: String
    },
    Products: {
        name: {
            type: String,
            // require: true
        },
        image: {
            type: String,
            // require: true
        },
        genres: {
            type: String,
            // require: true
        },
        price: {
            type: String,
            // require: true
        },
    
        club: {
            type: String,
            // require: true
        },
        size: {
            type: String,
            // require: true
        },
        namePlayer: {
            type: String,
        },
        number: {
            type: String,
        },
        amount: {
            type: String,
        },
        description: {
            type: String,
        }
    }
})



let Product = mongoose.model("Product", productSchema);
let Promotion = mongoose.model("Promotion", promotionSchema);
let Cart = mongoose.model("Cart", cartSchema);
module.exports = {Product, Promotion, Cart};