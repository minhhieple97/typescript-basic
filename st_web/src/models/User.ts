import { AxiosPromise } from 'axios';
import Attributes from './Attributes';
import Eventing from './Eventing';
import Sync from './Sync';
interface UserProps {
  id?: number,
  name?: string;
  age?: number;
}
class User {
  public events: Eventing = new Eventing()
  public sync: Sync<UserProps> = new Sync('http://localhost:3000/users')
  public attributes: Attributes<UserProps>;
  constructor(private data: UserProps) {
    this.attributes = new Attributes<UserProps>(this.data)
  }
  get<K extends keyof UserProps>(key: K): UserProps[K] {
    return this.attributes.get(key)
  }
  set(data: UserProps): void {
    this.attributes.set(data);
  };
  get on(): Function {
    return this.events.on;
  }
  get trigger(): Function {
    return this.events.trigger;
  }
  fetch(id: number): AxiosPromise<UserProps> {
    return this.sync.fetch(id).then(data => data)
  }
  // async save(data: UserProps): AxiosPromise<UserProps> {

  //   const user = await this.sync.fetch(data.id)
  // }

}
export default User;
