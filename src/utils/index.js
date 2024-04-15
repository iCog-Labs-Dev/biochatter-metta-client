import  store from "../store"

export default {
    dateFormatter(n) {
        if (n) {
            return new Intl.DateTimeFormat('en-US', {
                dateStyle: 'medium',
            }).format(new Date(n))
        } else {
            return 'N/A'
        }
    },
    errorHandler(fn){
        return(context,data)=>{
            fn(context,data).catch((error)=>{
                console.log(error)
                // for axios error
                if(error.response){
                    const {data,status,statusText} = error.response
                    store.dispatch('newStatus',{data,status,statusText})
                    context.commit("toggleWait", false);
                }
            })
          }
        }
}