import User from "../models/User";

class UserForm {
    constructor(public parent: Element, public model: User) { }
    template(): string {
        return `
     <div>
       <h1>User Form</h1>
       <div>User name: ${this.model.get('name')}</div>
       <input/>
       </div>
     <button>Click Me<button/>
`
    }
    eventsMap(): { [key: string]: () => void } {
        return {
            'click:button': this.onButtonClick,
            'mouseenter:h1': this.onHeaderHover
        }
    }
    onHeaderHover(): void {
        console.log('Hover H1')
    }

    onButtonClick(): void {
        console.log('Hi there')
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();
        for (const eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');
            fragment.querySelectorAll(selector).forEach((el) => {
                el.addEventListener(eventName, eventsMap[eventKey])
            })
        }
    }

    render(): void {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.parent.append(templateElement.content);

    }
}
export default UserForm