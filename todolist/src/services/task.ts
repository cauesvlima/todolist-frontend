import useAxios from "./api";

export const useTaskServices = () =>{
    const{api} = useAxios();

    return{
        taskCreate: async(data:object) =>{
            return await api.post('/task', {body:data});
        },
        taskGetAll: async()=>{
            return await api.get('/task');
        },
        taskGetUnique: async(id:number)=>{
            return await api.get(`/task/${id}`);
        },
        updatetask: async(id:number, data:object)=>{
            return await api.put(`/task/${id}`, data);
        },
        deletetask: async(id:number) =>{
            return await api.delete(`/task/${id}`);
        }

    }
}