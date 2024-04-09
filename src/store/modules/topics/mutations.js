export default {

    saveTopics(state, payload) {
        state.topics = payload;
    },
    addForm(state, formData) {
        state.submittedForms.push(formData);
      }
}