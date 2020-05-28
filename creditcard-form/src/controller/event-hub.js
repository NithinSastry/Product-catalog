export class EventHub {
  constructor() {
    this.EventMap = {};
  }
  subscribe = (event, callBack) => {
    if (typeof callBack === 'function' && event != undefined) {
      this.EventMap[event].push(callBack);
    }
  };
  publish = (event, payload) => {
    this.EventMap[event].forEach((subscriber) => {
      subscriber(payload);
    });
  };
}
