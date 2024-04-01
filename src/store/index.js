import { createStore } from "vuex";
import chatListModule from "./modules/chatlist/index";
import topicsModule from "./modules/topics/index";

const store = createStore({
    modules: {
        chatList: chatListModule,
        topics:topicsModule,
    }
});

export default store;