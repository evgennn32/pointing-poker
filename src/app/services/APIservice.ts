import { io } from "socket.io-client";
import User from "../../models/User";

export const APIService = {
  socket: {},
  connect: () => {
    APIService.socket = io("http://localhost:4000/", {
      reconnection: true,
      reconnectionDelay: 500,
      reconnectionAttempts: Infinity,
    });
  },
  gameCreate: async (user: User) => {
    try {
      APIService.socket.emit('create:game', user, (res) => {
        console.log(res)
      });
    } catch (e) {

    }
  },
};
