# Irasshaimase
### [Live Demo](https://irasshaimase-demo.herokuapp.com/ "Live Demo of Irasshaimase")

## Summary:
This is a fullstack demo for a self-checkout kiosk app intended for restaurant owners to be used by patrons and employees.
Created with React, React Context, Express, Node, MongoDB Atlas, Material-UI.

If you're wondering, Irasshaimase! (いらっしゃる! meaning "Welcome" or "Please come in") is a Japanese honorific expression for greeting or welcoming someone.

## Key features:

### Self-Checkout
Patrons can place and pay for food orders (Note: this app isn't connected to a pay service and doesn't accept payment information; it's features is only mimiced).
![](demo/irrorder.gif)

### State-Management
React-Context is used for state management of orders
### Admin/Queue
Restaurant and front-of-house employees may view/cancel/deliver orders through an admin screen and display a queue for backlogged/fulfilled orders.
These are public routes for the purposes of this demo.
[Admin Screen](https://irasshaimase-demo.herokuapp.com/admin)
[Queue Screen](https://irasshaimase-demo.herokuapp.com/queue) 
![](demo/irrqueueadmin.gif)

