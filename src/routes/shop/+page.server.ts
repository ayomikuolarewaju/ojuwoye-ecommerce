import type { Load } from '@sveltejs/kit';


export const load: Load = async ({fetch}) => {
      const getRes = async()=>{
       
           try{
            const res = await fetch("api/post")
            const task  = await res.json()
            return task
           }catch (e){
            console.log(e)
           }
      }

      return{
        res:getRes()
      }
}