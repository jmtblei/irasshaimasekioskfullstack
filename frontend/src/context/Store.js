import React, {
    createContext,
    useReducer,
} from 'react';
import {
    SCREEN_SET_WIDTH,
    ORDER_SET_TYPE,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    ORDER_ADD_ITEM,
    ORDER_REMOVE_ITEM,
    ORDER_CLEAR,
    ORDER_SET_PAYMENT_TYPE,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_QUEUE_LIST_REQUEST,
    ORDER_QUEUE_LIST_SUCCESS,
    ORDER_QUEUE_LIST_FAIL,
} from "./Constants";

export const Store = createContext();

const initialState = {
    widthScreen: false,
    categoryList: {
        loading: true,
    },
    productList: {
        loading: true,
    },
    order: {
        orderType: "Eat in",
        paymentType: "Pay here",
        orderItems: [],
        taxPrice: 0,
        totalPrice: 0,
        itemsCount: 0,
    },
    orderCreate: { 
        loading: true 
    },
    queueList: { loading: true },
};

function reducer(state, action) {
    switch(action.type) {
        //screen
        case SCREEN_SET_WIDTH:
            return {
                ...state,
                widthScreen: true,
            };
        //order type
        case ORDER_SET_TYPE:
            return {
                ...state,
                order: { ...state.order, orderType: action.payload },
            };
        //categories
        case CATEGORY_LIST_REQUEST:
            return {
                ...state,
                categoryList: { loading: true },
            };
        case CATEGORY_LIST_SUCCESS:
            return {
                ...state,
                categoryList: { loading: false, categories: action.payload },
            };
        case CATEGORY_LIST_FAIL:
            return {
                ...state,
                categoryList: { loading: false, error: action.payload },
            };
        //products
        case PRODUCT_LIST_REQUEST:
            return {
                ...state,
                productList: { loading: true },
            };
        case PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                productList: { loading: false, products: action.payload },
            };
        case PRODUCT_LIST_FAIL:
            return {
                ...state,
                productList: { loading: false, error: action.payload },
            };
        //modyfing orders
        case ORDER_ADD_ITEM: {
            const item = action.payload;
            const existItem = state.order.orderItems.find(
                (x) => x.name === item.name
            );
            const orderItems = existItem
                ? state.order.orderItems.map((x) =>
                    x.name === existItem.name ? item : x
                )
                : [...state.order.orderItems, item];

            const itemsCount = orderItems.reduce((a, c) => a + c.quantity, 0);
            const itemsPrice = orderItems.reduce(
                (a, c) => a + c.quantity * c.price,
                0
            );
            const taxPrice = Math.round(0.085 * itemsPrice * 100) / 100;
            const totalPrice = Math.round((itemsPrice + taxPrice) * 100) / 100;
            return {
                ...state,
                order: {
                ...state.order,
                orderItems,
                taxPrice,
                totalPrice,
                itemsCount,
                },
            };
        }
        case ORDER_REMOVE_ITEM:
            const orderItems = state.order.orderItems.filter(
                (x) => x.name !== action.payload.name
            );
            const itemsCount = orderItems.reduce((a, c) => a + c.quantity, 0);
            const itemsPrice = orderItems.reduce(
                (a, c) => a + c.quantity * c.price,
                0
            );
            const taxPrice = Math.round(0.085 * itemsPrice * 100) / 100;
            const totalPrice = Math.round((itemsPrice + taxPrice) * 100) / 100;
            return {
                ...state,
                order: {
                ...state.order,
                orderItems,
                taxPrice,
                totalPrice,
                itemsCount,
                },
            };
        case ORDER_CLEAR:
            return {
                ...state,
                order: {
                orderItems: [],
                taxPrice: 0,
                totalPrice: 0,
                itemsCount: 0,
                },
            };
        //payment type
        case ORDER_SET_PAYMENT_TYPE:
            return {
                ...state,
                order: { ...state.order, paymentType: action.payload },
            };
        //creating orders
        case ORDER_CREATE_REQUEST:
            return { 
                ...state, 
                orderCreate: { loading: true } 
            };
        case ORDER_CREATE_SUCCESS:
            return {
                ...state,
                orderCreate: { loading: false, newOrder: action.payload },
            };
        case ORDER_CREATE_FAIL:
            return {
                ...state,
                orderCreate: { loading: false, error: action.payload },
            };
        //queue
        case ORDER_QUEUE_LIST_REQUEST:
            return { ...state, queueList: { loading: true } };
        case ORDER_QUEUE_LIST_SUCCESS:
            return {
                ...state,
                queueList: { loading: false, queue: action.payload },
            };
        case ORDER_QUEUE_LIST_FAIL:
            return {
                ...state,
                queueList: { loading: false, error: action.payload },
            };
        default: 
            return state;
    }
};

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};

    return <Store.Provider value={value}>{props.children}</Store.Provider>
}
