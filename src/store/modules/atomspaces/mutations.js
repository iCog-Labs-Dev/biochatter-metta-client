export default {

    saveAtomspaces(state, payload) {
        state.atomspaces = payload;
    },
    addAtomspaces(state, payload) {
        state.atomspaces.push(payload);
    },
    saveSchema(state, payload) {
        state.schema = payload;
    },
}