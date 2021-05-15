import { createStore } from "redux"
import rootReducer from "reducers"

export default preloadedState => {
  return createStore(rootReducer, preloadedState)
}
