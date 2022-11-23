const {Account} = require("../models/model");

const accountController = {
    
    addAccount: async(req, res) => {
        try {
            const newAccount = new Account(req.body);
            const savedAccount = await newAccount.save();
            res.status(200).json(savedAccount);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAllAccount: async(req, res) => {
        try {
            const allAccount = await Account.find()
            // const allProduct = await Product.findById(req.params.id).populate("store");
            res.status(200).json(allAccount);
            // res.status(200).json(allProduct);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAccount: async(req, res) => {
        try {
            const account = await Account.findById(req.params.id)
            // const product = await Product.findById(req.params.id).populate("store");
            res.status(200).json(account);
            // res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updateAccount: async(req, res) => {
        try {
            const account = await Account.findById(req.params.id);
            await account.updateOne({$set : req.body});
            res.status(200).json("Updated succesfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteAccount: async (req, res) => {
        try {
            // await User.updateOne(
            //     {account: req.params.id}, 
            //     {$pull: {account: req.params.id}}
            // );
            await Account.findByIdAndDelete(req.params.id);
            // await User.deleteOne({account: req.params.id});
            res.status(200).json("Deleted successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    }
};


module.exports = accountController;