import API from "../api";
import * as c from "../constants"
import defaultGet from "./vendors/defaultGet"

const get = defaultGet(new API);

export const getPeople = (search, page) => {
	return get("people", c.PEOPLE_GET, {search, page});
};

