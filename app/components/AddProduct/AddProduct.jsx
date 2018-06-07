import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'react-emotion';

import { addToCart } from '../../store/actions/actionCreators';

const Button = styled.button`
	border: 2px solid #ddd;
	background-color: green;
	color: #fff;
	font-weight: bold;
	padding: 3px 10px;

	&:active {
		background-color: darkgreen;
		box-shadow: 0 -1px #666;
	}
`;

const Qty = styled.input`
	width: 20px;
	padding: 2px 6px;
	border: 1px solid #ddd;
`;

const AddProductTpl = ({ details, addToCart }) => {
	return (
		<Fragment>
			<Button onClick={addToCart.bind(this, details)}>Add to Cart</Button>
		</Fragment>
	);
};

const mapDispatchToProps = {
	addToCart
};

export default connect(null, mapDispatchToProps)(AddProductTpl);