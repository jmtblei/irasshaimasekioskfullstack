const express = require("express");
const router = express.Router();

const {
    getAllOrders,
    createOrder,
    fulfillOrder,
    deleteOrder,
    getOrdersQueue,
} = require ("../controller/orderController");

//@desc get all orders
//@route get /api/orders
//@access public (admin view)
router.get("/", getAllOrders);

//@desc create new order
//@route post /api/orders
//@access public (admin view)
router.post("/", createOrder);

//@desc edit specific order by id
//@route put /api/orders/:id
//@access public (admin view)
router.put("/:id", fulfillOrder);

//@desc delete specific order by id
//@route delete /api/orders/:id
//@access public (admin view)
router.delete("/:id", deleteOrder);

//@desc get queue or orders
//@route get /api/orders/queue
//@access public (admin view)
router.get("/queue", getOrdersQueue);

module.exports = router;