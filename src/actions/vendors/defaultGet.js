export default Service =>
	(name, constName, params) =>
		dispatch =>
		{
			dispatch({type: constName + "_REQ"})	;

			return Service[name]
				.call(Service, params)
				.then(payload => dispatch({
						type: constName,
						payload
					})
				)

		}
