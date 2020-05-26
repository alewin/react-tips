# Immutability

- Immerjs

```javascript
// Redux reducer based on: https://github.com/reactjs/redux/blob/master/examples/shopping-cart/src/reducers/products.js
const byId = (state, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                    obj[product.id] = product
                    return obj
                }, {})
            }
        default:
            return state
    }
}
```

immer:
```javascript
import produce from "immer"
const byId = produce((draft, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            action.products.forEach(product => {
                draft[product.id] = product
            })
    }
})
```
