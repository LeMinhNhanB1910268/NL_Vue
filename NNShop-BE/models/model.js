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
// const userSchema = new mongoose.Schema({
//     name : {
//         type: String,
//         require: true
//     },
//     phone: {
//         type: String,
//     },
//     email: {
//         type: String,
//     },
//     address: {
//         type: String,
//         require: true
//     },
// })

// const cartSchema = new mongoose.Schema({
//     usrId : {
//         type: String,
//         // require: true
//     },
//     Product: {
//         type: String,
//     },
//     email: {
//         type: String,
//     },
//     address: {
//         type: String,
//         // require: true
//     },
// })

// const accountSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         require: true
//     },
//     password: {
//         type: String,
//         require: true
//     },
//     root: {
//         type: String,
//     },
//     avatar: {
//         type: String,
//     },
//     own: {
//         name : {
//             type: String,
//             require: true
//         },
//         phone: {
//             type: String,
//         },
//         email: {
//             type: String,
//         },
//         address: {
//             type: String,
//             require: true
//         },
//     },

//     store: 
//         {
//         name: {
//             type: String,
//             // require: true
//         },
//         image: {
//             type: String,
//             // require: true
//         },
//         genres: {
//             type: String,
//             // require: true
//         },
//         price: {
//             type: String,
//             // require: true
//         },
    
//         club: {
//             type: String,
//             // require: true
//         },
//         size: {
//             type: String,
//             // require: true
//         },
//         namePlayer: {
//             type: String,
//         },
//         number: {
//             type: String,
//         },
//         amount: {
//             type: String,
//         },
//         description: {
//             type: String,
//         }
//     }
// })


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
// let User = mongoose.model("User", userSchema);
// let Account = mongoose.model("Account", accountSchema);
let Promotion = mongoose.model("Promotion", promotionSchema);
module.exports = {Product, Promotion};