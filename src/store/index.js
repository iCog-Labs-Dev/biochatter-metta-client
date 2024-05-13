import { createStore } from "vuex";
import chatListModule from "./modules/chatlist/index";
import examplesModule from "./modules/examples/index";
import statusModule from "./modules/status/index";
import multiStepModule from "./modules/multistep/index";
import atomspacesModule from "./modules/atomspaces/index";

const store = createStore({
    modules: {
        chat: chatListModule,
        example:examplesModule,
        status:statusModule,
        multiStep: multiStepModule,
        atomspaces: atomspacesModule,
    }
});

export default store;