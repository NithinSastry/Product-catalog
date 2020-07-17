let instance;
class EventHub {
  constructor() {
    this.eventMap = {};
    instance = this;
  }
  subscribe = (eventName, callBack) => {
    if (typeof callBack === 'function' && eventName) {
      if (this.eventMap[eventName]) {
        this.eventMap[eventName].push(callBack);
        return;
      }
      this.eventMap[eventName] = [];
      this.eventMap[eventName].push(callBack);
    }
  };
  publish = (eventName, payload = {}) => {
    if (this.eventMap[eventName]) {
      this.eventMap[eventName].forEach((subscriber) => {
        subscriber(payload);
      });
    }
  };
}

export const getEventHub = () => {
  if (!instance) {
    return new EventHub();
  }
  return instance;
};
