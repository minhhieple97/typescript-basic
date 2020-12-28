interface UserProps {
  name?: string;
  age?: number;
}
type Cb = () => void;
class User {
  events: { [key: string]: Cb[] } = {};
  constructor(private data: UserProps) {}
  get<K extends keyof UserProps>(propName: K): UserProps[K] {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
  on(eventName: string, callback: Cb): void {}
}
export default User;
