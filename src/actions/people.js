import APIConstructor from "../api";
import * as c from "../constants"
import defaultGet from "./vendors/defaultGet"

const API = new APIConstructor();
const get = defaultGet(API);

export const getPeople = (search, page) => {
	return get("people", c.PEOPLE_GET, {search, page});
};

