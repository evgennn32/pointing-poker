import { io, Socket } from "socket.io-client";
import User from "../../models/User";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import { gameUpdate } from "../slices/gameSlice";

const APIService = {
  connected: false,
  socket: {} as Socket,
  connect: (): void => {
    APIService.socket = io("http://localhost:4000/", {
      reconnection: true,
      reconnectionDelay: 500,
      reconnectionAttempts: Infinity,
    });
    APIService.socket.on("connect", () => {
      APIService.connected = true;
    });
    APIService.socket.on("disconnect", () => {
      APIService.connected = false;
    });
  },
  gameCreate: (user: User): void => {
    if (APIService.connected) {
      try {
        const cb = (res: { error: string; game: GameRoomEntity }): void => {
          if (res.error) {
            throw Error(res.error);
          }
        };
        APIService.socket.emit("create:game", user, cb);
      } catch (e) {
        console.log(e);
      }
    }
  },
  loadCreatedGame: (): ((dispatch: any) => void) => (dispatch: any) => {
    APIService.socket.on("game:created", (res) => {
      dispatch(gameUpdate(res));
    });
  },
};

export default APIService;
