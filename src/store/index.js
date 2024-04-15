import { createStore } from "vuex";
import chatListModule from "./modules/chatlist/index";
import topicsModule from "./modules/topics/index";
import statusModule from "./modules/status/index";

const store = createStore({
    modules: {
        chat: chatListModule,
        topics:topicsModule,
        status:statusModule
    }
});

export default store;