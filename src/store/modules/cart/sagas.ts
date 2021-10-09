import { all, takeLatest } from 'redux-saga/effects';
import { addProductToCart } from './actions';

type checkProductStockRequest = ReturnType<typeof addProductToCart>

function* checkProductStock(action: checkProductStockRequest) {
    console.log('action interceptada');
}

export default all([
    takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)
]);