import axios, { AxiosResponse } from 'axios'
import Eventing from './Eventing';
import Sync from './Sync';
interface UserProps {
  id?: string,
  name?: string;
  age?: number;
}
class User {
  public events: Eventing = new Eventing()
  public sync: Sync<User> = new Sync()
  constructor(private data: UserProps) { }

  get<K extends keyof UserProps>(propName: K): UserProps[K] {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
export default User;
