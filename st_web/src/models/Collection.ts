import axios, { AxiosResponse } from 'axios';
import Eventing from "./Eventing";
import User, { UserProps } from "./User";

class Collection<T, U> {
    models: T[] = []
    events: Eventing = new Eventing();
    constructor(
        public rootUrl: string,
        public deserialize: (json: U) => T
    ) { }
    get on() {
        return this.events.on
    }
    get trigger() {
        return this.events.trigger
    }
    fetch(): void {
        axios.get(this.rootUrl)
            .then((res: AxiosResponse) => {
                res.data.forEach((val: U) => {
                    // const user = User.buildUser(val);
                    this.models.push(this.deserialize(val))
                });
                this.trigger('change')
            })
    }
}
export default Collection