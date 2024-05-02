export default {
    step(state) {
        return state.step;
    },
    // multiStep(state) {
    //     return state.step;
    // },
    dbname(state) {
        return state.dbname;
    },
    entities(state) {
        return state.plan;
    },
    stepInfo(state) {
        return state.stepInfo
    },
    // plan(state) {
    //     return state.plan;
    // },
    total(state) {
        return state.total;
    },
    isCompleted(state) {
        return state.isCompleted;
    },
}