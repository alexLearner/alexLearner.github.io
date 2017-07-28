import fetch from "isomorphic-fetch";
import forEach from "lodash/forEach"
import store from "store"

export default class API {
	constructor() {
		this.URL = "https://swapi.co/api";
	}

	setStorage(name, item) {
		store.set(name, JSON.stringify(item));
	}

	getStorage(name) {
		return store.get(name);
	}

	fetch(url, obj = {}) {
		obj.headers = {
			"Accept": "application/json",
			"Content-Type": "application/json"
		};

		return fetch(url, obj);
	}

	async get(url, params) {
		let
			resultUrl = url + (params ? this.params(params) : ""),
			cache = this.getStorage(resultUrl);

		if (cache) {
			return new Promise(resolve => resolve(JSON.parse(cache)));
		}

		// await promise - fast fix conflicts with long prev promise and cached news promise
		// Sometimes incorrect data was displayed because new cached data came faster than the last request

		let response;

		await this
			.fetch(resultUrl)
			.then(r => r.json())
			.then(r => {
				this.setStorage(resultUrl, r);
				response = r;
				return r;
			});

		return response
	}

	params(object) {
		if (!object) return "";

		let result = [];
		forEach(object, (val, key) =>
			val
				? result.push(encodeURIComponent(key) + "=" + encodeURIComponent(val))
				: null
		);

		if (!result.length) {
			return "";
		}

		return "?" + result.join("&");
	}

	people(params) {
		return this.get(`${this.URL}/people/`, params)
	}

};



