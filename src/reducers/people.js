import * as c from "../constants/index.js"

const initialState = {
	fetched: false
};

export default function articles( state = initialState, action ) {
	switch (action.type) {
		case c.PEOPLE_GET:
			return { ...action.payload, fetched: true };

		case c.PEOPLE_GET_REQ:
			return { ...state, fetched: false };

		default:
			return state

	}
}