import { createStore } from "vuex"
import Feed from './modules/feed'

const store = createStore({
    modules: {
        Feed
    }
});

export default store;