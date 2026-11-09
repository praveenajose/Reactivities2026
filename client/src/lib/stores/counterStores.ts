import { makeAutoObservable } from "mobx";

export default class CounterStore {
  count = 0;
  title = "Counter Store";
  events: string[] = [`Initial Count: ${this.count}`];

  constructor() {
    makeAutoObservable(this);
  }

  increment = (amount = 1) => {
    this.count += amount;
    this.events.push(`Incremented by ${amount}, new count: ${this.count}`);
  };

  decrement = (amount = 1) => {
    this.count -= amount;
    this.events.push(`Decremented by ${amount}, new count: ${this.count}`);
  };

  getEventCount = () => {
    return this.events.length;
  };
}
