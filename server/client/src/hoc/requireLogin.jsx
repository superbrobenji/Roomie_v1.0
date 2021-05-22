import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default (ChildComponent) => {
	const ComposedComponent = (props) => {
		const { auth } = props;
		const history = useHistory();
		useEffect(() => {
			if (!auth.loading && !auth.data) return history.push('/');
		}, [auth]);

		return <ChildComponent props={props} />;
	};

	ComposedComponent.propTypes = {
		auth: PropTypes.shape({
			data: PropTypes.oneOfType([
				PropTypes.bool,
				PropTypes.objectOf(
					PropTypes.oneOfType([
						PropTypes.string,
						PropTypes.number,
					]),
				),
			]),
			loading: PropTypes.bool,
		}).isRequired,
	};

	const mapStateToProps = ({ auth }) => ({ auth });

	return connect(mapStateToProps)(ComposedComponent);
};
