export default {

    /**
     * Adds a new status to the store.
     *
     * @param {Object} context - The Vuex context object.
     * @param {Object} data - The data object containing the new status.
     * @return {Promise<void>} A promise that resolves when the status is added to the store.
     */
  async newStatus(context, data) {
    console.log('new status', data)
    context.commit('addStatus',data)
  },

  /**
   * Removes a status from the store.
   *
   * @param {Object} context - The Vuex context object.
   * @param {Object} data - The data object containing the status to be removed.
   * @return {Promise<void>} A promise that resolves when the status is removed from the store.
   */
  async remStatus(context, data) {
      context.commit('removeStatus',data)
  }
}
