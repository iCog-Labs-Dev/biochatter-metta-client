import  store from "../store"

export default {
        /**
     * A function that formats a date based on the provided input.
     *
     * @param {type} n - The input date value to format.
     * @return {type} The formatted date or 'N/A' if input is falsy.
     */
    dateFormatter(n) {
        if (n) {
            return new Intl.DateTimeFormat('en-US', {
                dateStyle: 'medium',
            }).format(new Date(n))
        } else {
            return 'N/A'
        }
    },
    /**
 * A higher-order function that wraps an async function with error handling.
 *
 * @param {Function} fn - The async function to be wrapped.
 * @return {Function} - The wrapped async function.
 */
    errorHandler(fn){
        return(context,data)=>{
            fn(context,data).catch((error)=>{
                console.log(error)
                // for axios error
                if(error.response){
                    const {data,status,statusText} = error.response
                    console.log({data,status,statusText})
                    store.dispatch('newStatus',{data,status,statusText})
                    context.commit("toggleWait", false);
                    // context.commit('addStatus', "error.message")
                }
            })
          }
        }
}