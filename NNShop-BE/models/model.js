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
const userSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
        require: true
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account"
    }
})

const accountSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    root: {
        type: String,
    },
    avatar: {
        type: String,
    },
    own: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    store: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
   
    
})


const promotionSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    discount: {
        type: String,
        require: true,
    },
    time: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    }
})

let Product = mongoose.model("Product", productSchema);
let User = mongoose.model("User", userSchema);
let Account = mongoose.model("Account", accountSchema);
let Promotion = mongoose.model("Promotion", promotionSchema);
module.exports = {Product, User, Account, Promotion};