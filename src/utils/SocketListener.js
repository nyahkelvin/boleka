import SockJS from 'sockjs-client'
import EventBus from 'vertx3-eventbus-client'

export const socket = new EventBus('http://localhost:7000/eventbus')

export default function (dispatch, setState) {
  socket.onopen = function () {
    return (dispatch) => {
        dispatch({ type: "CONNECTED"})
    }
  }

  socket.onclose = function () {
    return (dispatch) => {
        dispatch({ type: "DISCONNECTED"})
    }
  }
}