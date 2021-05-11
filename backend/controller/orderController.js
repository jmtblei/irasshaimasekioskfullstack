const Order = require ("../models/Order");

//@desc helper function 
//@get all orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({ isDelivered: false, isCanceled: false });
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
};

//@create new order
const createOrder = async (req, res) => {
    const lastOrder = await Order.find().sort({ number: -1 }).limit(1);
    const lastNumber = lastOrder.length === 0 ? 0 : lastOrder[0].number;
    if (
        !req.body.orderType ||
        !req.body.paymentType ||
        !req.body.orderItems ||
        req.body.orderItems.length === 0
    ) {
        return res.json({ message: "Please specify all fields" });
    }
    const order = await Order({ ...req.body, number: lastNumber + 1 }).save();
    res.json(order);
};

//@edit/fulfill order
const fulfillOrder = async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      if (req.body.action === "ready") {
        order.isReady = true;
        order.inProgress = false;
      } else if (req.body.action === "deliver") {
        order.isDelivered = true;
      } else if (req.body.action === "cancel") {
        order.isCanceled = true;
      }
      await order.save();
      res.json({ message: "Complete" });
    } else {
      req.status(404).message("Order not found");
    }
};

//@delete order/fulfilled
const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
};

//@get queue of ready/fufilled orders
const getOrdersQueue = async (req, res) => {
    try {
        const inProgressOrders = await Order.find(
          { inProgress: true, isCanceled: false },
          "number"
        );
        const servingOrders = await Order.find(
          { isReady: true, isDelivered: false },
          "number"
        );
        res.json({ inProgressOrders, servingOrders });
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
};

module.exports = {
    getAllOrders,
    createOrder,
    fulfillOrder,
    deleteOrder,
    getOrdersQueue,
}