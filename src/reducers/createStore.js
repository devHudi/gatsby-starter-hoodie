import { createStore } from "redux"
import rootReducer from "reducers"

const store = preloadedState => createStore(rootReducer, preloadedState)

export default store
