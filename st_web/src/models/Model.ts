import { AxiosResponse } from 'axios';
import { AxiosPromise } from 'axios';
interface ModelAttributes<T> {
    set(value: T): void,
    getAll(): T,
    get<K extends keyof T>(key: K): T[K]
}
interface Sync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}
interface Events {
    on(eventName: string, callback: () => void): void,
    trigger(eventName: string): void
}
interface HasId {
    id?: number
}
export class Model<T extends HasId> {
    constructor(private attributes: ModelAttributes<T>, private events: Events, private sync: Sync<T>) { }
    set(data: T): void {
        this.attributes.set(data);
        this.trigger('change');
    };
    get = this.attributes.get;
    on = this.events.on;
    trigger = this.events.trigger
    fetch() {
        const id = this.get('id');
        if (typeof id !== 'number') throw new Error('Not foud user')
        return this.sync.fetch(id).then((res: AxiosResponse<T>) => {
            this.set(res.data)
        })
    }
    save(): void {
        this.sync.save(this.attributes.getAll())
            .then((res: AxiosResponse): void => {
                this.trigger('save')
            })
            .catch(() => {
                this.trigger('error')
            })

    }
}
export default Model 