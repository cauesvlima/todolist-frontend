import useAxios from "./api";

export const useListServices = () =>{
    const{api} = useAxios();

    return{
        listCreate: async(data:object) =>{
            return await api.post('/list', {body:data});
        },
        listGetAll: async()=>{
            return await api.get('/list');
        },
        listGetUnique: async(id:number)=>{
            return await api.get(`/list/${id}`);
        },
        updateList: async(id:number, data:object)=>{
            return await api.put(`/list/${id}`, data);
        },
        deleteList: async(id:number) =>{
            return await api.delete(`/list/${id}`);
        }

    }
}