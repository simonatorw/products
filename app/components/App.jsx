import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'react-emotion';

import { getProducts } from '../store/actions/actionCreators';
import Tile from './Tile/Tile';
import Cart from './Cart/Cart';

const Container = styled.div`
	font-size: 12px;
	font-family: verdana, sans-serif;
	color: #333;
	margin: 0 auto;
	max-width: 1600px;
	width: 1200px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 6px;
`;

const Title = styled.h1`
	font-size: 1.6rem;
	grid-column: 1/3;
`;

class App extends Component {
	static propTypes = {
		products: PropTypes.array.isRequired,
		cart: PropTypes.array.isRequired,
		getProducts: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.getProducts();
	}
	
	render() {
		const { products, cart } = this.props;

		return (	
			<Container>
				<Title>Products</Title>
				<Cart items={cart} />
				{
					products.map(item => <Tile key={item.upc} details={item} />)
				}
			</Container>
		);
	}
}

function mapStateToProps(store) {
	return {
		products: store.dataReducer.products,
		cart: store.appReducer.cart
	};
}

const mapDispatchToProps = {
	getProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(App);