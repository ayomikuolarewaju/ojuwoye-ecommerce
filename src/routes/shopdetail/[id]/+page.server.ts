export const load = async ({fetch}) => {
    const getDetails = async()=>{
         try{
          const res = await fetch("http://cheerful-beijinho-1f19f6.netlify.app/api/post")
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