import { io } from "socket.io-client";

export const APIservice = {
  connect: () => {
    return io("http://localhost:4000/");
  },
};
