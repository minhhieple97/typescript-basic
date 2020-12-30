import axios, { AxiosPromise, AxiosResponse } from "axios";
interface UserProps {
    id?: string,
    name?: string;
    age?: number;
}
class Sync<T> {
    fetch(id: string): AxiosPromise<T> {
        return axios.get(`http://localhost:3000/users/${id}}`)
            .then((response: AxiosResponse) => {
                return response
            })
    }
    save(id: string, data: T): AxiosPromise<T> {
        return this.fetch(id).then((res) => {
            if (res.data) {
                return axios.put(`http://localhost:3000/users/${id}`, data).then(res => res)
            }
            else {
                return axios.post(`http://localhost:3000/users`, data).then(res => res)
            }
        });

    }

}
export default Sync