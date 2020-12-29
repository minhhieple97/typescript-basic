import axios, { AxiosResponse } from 'axios'
interface UserProps {
  id?: string,
  name?: string;
  age?: number;
}
type Cb = () => void;
class User {
  events: { [key: string]: Cb[] } = {};
  constructor(private data: UserProps) { }
  get<K extends keyof UserProps>(propName: K): UserProps[K] {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
  on(eventName: string, callback: Cb): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }
  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) return;
    handlers.forEach(cb => {
      cb()
    })
  }
  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse) => {
        console.log({ response })
        this.set(response.data)
      })
  }
  save(): void {
    const id = this.get('id');
    if (id) {
      axios.put(`http://localhost:3000/users/${id}`)
    }
    else {
      axios.post(`http://localhost:3000/users`, this.data)
    }
  }
}
export default User;
