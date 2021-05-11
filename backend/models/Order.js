const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    number: { 
        type: Number, 
        default: 0
    },
    orderType: {
        type: String,
    },
    paymentType: {
        type: String,
    },
    isPaid: { 
        type: Boolean, 
        default: false 
    },
    isReady: { 
        type: Boolean, 
        default: false 
    },
    inProgress: { 
        type: Boolean, 
        default: true 
    },
    isCanceled: { 
        type: Boolean, 
        default: false 
    },
    isDelivered: { 
        type: Boolean, 
        default: false 
    },
    totalPrice: {
        type: Number,
    },
    taxPrice: {
        type: Number,
    },
    orderItems: [{
        name: {
            type: String,
        },
        price: {
            type: Number,
        },
        quantity: {
            type: Number,
        },
    }],
    },
    {
      timestamps: true,
    }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;