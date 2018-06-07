import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const ShoppingCart = styled.div`
	font-size: 1.3rem;
    grid-column: 3/4;
    margin: 16px 0;
    text-align: right;	
`;

const Total = styled.span`
	font-size: 1.3rem;
    font-weight: bold;
    color: darkgreen;
`;

const CartTpl = ({ items }) => {
	return (
		<ShoppingCart>
			<Total>{items.length}</Total> - Cart
		</ShoppingCart>
	);
};

CartTpl.propTypes = {
	items: PropTypes.array.isRequired
};

export default CartTpl;