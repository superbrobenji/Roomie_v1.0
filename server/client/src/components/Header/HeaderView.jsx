import React from 'react';
import PropTypes from 'prop-types';

const HeaderView = ({ funcHandleLoginRender }) => (
	<>
		<nav>
			<div className="nav-wrapper">
				<a href="/" className="left brand-logo">
					Test Header
				</a>
				<ul className="right">
					{funcHandleLoginRender()}
				</ul>
			</div>
		</nav>
	</>
);

export default HeaderView;

HeaderView.propTypes = {
	funcHandleLoginRender: PropTypes.func.isRequired,
};
