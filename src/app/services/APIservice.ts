import { io } from "socket.io-client";

export const APIService = {
  connect: () => {
    return io("http://localhost:4000/", {
      reconnection: true,
      reconnectionDelay: 500,
      reconnectionAttempts: Infinity,
    });
  },
};
