import { createStore } from "vuex";
import chatListModule from "./modules/chatlist/index";
import topicsModule from "./modules/topics/index";
import statusModule from "./modules/status/index";
import multiStepModule from "./modules/multistep/index";

const store = createStore({
    modules: {
        chat: chatListModule,
        topics:topicsModule,
        status:statusModule,
        multiStep: multiStepModule
    }
});

export default store;