import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import AddProduct from '../AddProduct/AddProduct';

const ProductTile = styled.div`
	border: 1px solid #ddd;
	padding: 16px;

	&:hover {
		border-color: green;
	}
`;

const Title = styled.h2`
	margin: 0;
	font-size: 1.1rem;
	font-weight: normal;
	color: #666;
	height: 43px;
`;

const Image = styled.div`
	margin-top: 10px;
	background: url(${p => p.path.base_url + p.path.primary}) no-repeat;
	width: 120px;
	height: 180px;
	background-size: contain;
`;

const TileTpl = ({ details }) => {
	return (
		<ProductTile>
			<Title>{details.title}</Title>
			<Image path={details.images[0]} />
			<AddProduct details={details} />
		</ProductTile>
	);
};

TileTpl.propTypes = {
	details: PropTypes.object.isRequired
};

export default TileTpl;