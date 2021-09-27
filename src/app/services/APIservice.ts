import { io, Socket } from "socket.io-client";
import User from "../../models/User";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import GameSettings from "../../models/GameSettings";
import Card from "../../models/Card";

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
  gameCreate: async (user: User): Promise<GameRoomEntity | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve) => {
          const cb = (res: { error: string; game: GameRoomEntity }): void => {
            if (res.error) {
              throw Error(res.error);
            }
            resolve(res.game);
          };
          APIService.socket.emit("create:game", user, cb);
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  gameUpdateSettings: async (
    gameSettings: GameSettings,
    roomId: string,
  ): Promise<GameSettings | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve) => {
          const cb = (res: { error: string; settings: GameSettings }): void => {
            if (res.error) {
              throw Error(res.error);
            }
            resolve(res.settings);
          };
          APIService.socket.emit(
            "game:update-settings",
            gameSettings,
            roomId,
            cb,
          );
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  cardAdd: async (card: Card, roomId: string): Promise<Card | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve) => {
          const cb = (res: { error: string; card: Card }): void => {
            if (res.error) {
              throw Error(res.error);
            }
            resolve(res.card);
          };
          APIService.socket.emit("game:card-add", card, roomId, cb);
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
};

export default APIService;
