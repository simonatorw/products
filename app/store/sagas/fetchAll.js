import { call, put, takeEvery } from 'redux-saga/effects';

import actionTypes from '../actions/actionTypes';
import { getProductsSucceeded, getProductsFailed } from '../actions/actionCreators';
import { fetchGet } from '../../api/async';
import { dataUrls } from '../../constants';

export function* fetchAll(action) {
	try {
		const data = yield call(fetchGet, dataUrls.ALL);

		yield put(getProductsSucceeded(data));
	} catch (err) {
		console.log(err);
		yield put(getProductsFailed(err));
	}
}

export default function* watchFetchAll() {
	yield takeEvery(actionTypes.GET_PRODUCTS, fetchAll);
}
