import EventBus from 'vertx3-eventbus-client'

export const socket = new EventBus('http://localhost:8080/eventbus/', {"vertxbus_ping_interval": 300000})