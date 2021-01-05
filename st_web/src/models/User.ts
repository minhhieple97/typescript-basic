import ApiSync from './ApiSync';
import Attributes from './Attributes';
import Eventing from './Eventing';
import { Model } from './Model';
interface UserProps {
  id?: number,
  name?: string;
  age?: number;
}
const rootUrl = 'http://localhost:3000/users';
class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }
}
export default User;
