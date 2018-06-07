import actionTypes from './actionTypes';

export const getProducts = () => ({
	type: actionTypes.GET_PRODUCTS
});

export const getProductsSucceeded = (data) => ({
	type: actionTypes.GET_PRODUCTS_SUCCEEDED,
	data
});

export const getProductsFailed = (err) => ({
	type: actionTypes.GET_PRODUCTS_FAILED,
	err
});

export const addToCart = (item) => ({
	type: actionTypes.ADD_TO_CART,
	item
});
