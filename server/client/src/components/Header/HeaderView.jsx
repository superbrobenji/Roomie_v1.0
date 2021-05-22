import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeaderView = ({
	handleLoginRender,
	getLogoUrl,
}) => {
	const { url, text } = handleLoginRender;
	return (
		<>
			<nav>
				<div className="nav-wrapper">
					<Link
						to={getLogoUrl()}
						className="left brand-logo"
					>
						Test Header
					</Link>
					<ul className="right">
						<li>
							{ url ? <a href={url}>{text}</a> : text}
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default HeaderView;

HeaderView.propTypes = {
	handleLoginRender: PropTypes.shape({
		url: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
		text: PropTypes.string,
	}).isRequired,
	getLogoUrl: PropTypes.func.isRequired,
};
