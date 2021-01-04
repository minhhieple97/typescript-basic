import { AxiosResponse } from 'axios';
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
  constructor(data: UserProps) {
    this.attributes = new Attributes<UserProps>(data)
  }
  get<K extends keyof UserProps>(key: K): UserProps[K] {
    return this.attributes.get(key)
  }
  set(data: UserProps): void {
    this.attributes.set(data);
    this.trigger('change');
  };
  get on(): Function {
    return this.events.on;
  }
  get trigger(): Function {
    return this.events.trigger;
  }
  fetch() {
    const id = this.get('id');
    if (!id) throw new Error('Not foud user')
    return this.sync.fetch(id).then((res: AxiosResponse<UserProps>) => {
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
export default User;
