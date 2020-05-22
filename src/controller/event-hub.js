let instance = null;
class EventHub {
    constructor() {
        if (!instance) {
            this.EventMap = {
                "listChanged": []
            }
            instance = this;
        }
        return instance;
    }

    publish(event, data) {
        switch (event) {
            case "listChanged":
                this.EventMap["listChanged"].forEach((subscriber) => {
                    subscriber(data);
                });
                break;
            default:
                break;
        }
    }

    subscribeToList = (callBack) => {
        if (typeof callBack === "function") {
            this.EventMap.listChanged.push(callBack);
        }
    }
}

export default EventHub;