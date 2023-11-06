export const load = async ({fetch}) => {
    const getDetails = async()=>{
         try{
          const res = await fetch("http://localhost:5173/api/post")
          const task  = await res.json()
          return task
         }catch (e){
          console.log(e)
         }
    }

    return{
      dt:getDetails()
    }
}