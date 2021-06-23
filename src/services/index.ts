import axios from "axios";
import { ICreate } from "../commonTypes";


class Services {
    AXIOS = axios.create({ baseURL: "http://localhost:8000" });
    async getData(){
        try{
            const res = await this.AXIOS.get('/notes')
            if (!res || !res.data){
                throw new Error("Could not get data")
            }
            return res
        }
        catch(e){
            throw e
        }        
    }

    async putData(note : ICreate){
        try{
            const res = await this.AXIOS.post('/notes',note)
            if (!res || !res.data){
                throw new Error("Could not create note")
            }
            return "Created Note"
        }
        catch(e){
            throw e
        }  
    }

    async deleteData(id: number){        
        try{
            const res = await this.AXIOS.delete(`/notes/${id}`)
            if (!res || !res.data){
                throw new Error("Could not delete note")
            }
            return "Note deleted"
        }
        catch(e){
            throw e
        }  
    }
}


export default new Services()
