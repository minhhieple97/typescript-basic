type Cb = () => void;
interface Event {
    on(eventName: string, callback: Cb): void,
    trigger(eventName: string): void,
    events: { [key: string]: Cb[] };
}
class Eventing implements Event {
    events: { [key: string]: Cb[] } = {};
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
}
export default Eventing