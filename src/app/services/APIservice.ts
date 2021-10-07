import { io, Socket } from "socket.io-client";
import User from "../../models/User";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import GameSettings from "../../models/GameSettings";
import Card from "../../models/Card";
import Issue from "../../models/Issue";
import { AppDispatch } from "../store";
import {
  updateGameIssues,
  updateGameUsers,
  updateGameSettingsState,
  addGameRound,
  updateGame,
} from "../slices/gameSlice";
import { roundUpdateState } from "../slices/roundSlice";
import Round from "../../models/Round";
import { ChatMessage, chatAddMessage } from "../slices/chatSlice";

const APIService = {
  connected: false,
  handleEventStarted: false,
  socket: {} as Socket,
  connect: (): void => {
    APIService.socket = io("https://pointing-poker-api.herokuapp.com", {
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
  gameDelete: async (
    roomId: string,
  ): Promise<{ success?: boolean; error?: string } | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve, reject) => {
          const cb = (res: { error: string; success: boolean }): void => {
            if (res.error) {
              return reject(res);
            }
            return resolve(res);
          };
          APIService.socket.emit("game:delete", roomId, cb);
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  gameJoin: async (
    roomId: string,
  ): Promise<{ game?: GameRoomEntity; error?: string } | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve) => {
          const cb = (res: { error: string; game: GameRoomEntity }): void => {
            resolve(res);
          };
          APIService.socket.emit("game:join", roomId, cb);
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  gameStop: async (
    roomId: string,
  ): Promise<{ game?: GameRoomEntity; error?: string } | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve) => {
          const cb = (res: { error: string; game: GameRoomEntity }): void => {
            resolve(res);
          };
          APIService.socket.emit("game:end", roomId, cb);
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  gameStart: async (
    roomId: string,
  ): Promise<
    { gameSettings?: GameSettings; round: Round; error?: string } | undefined
  > => {
    if (APIService.connected) {
      try {
        return new Promise((resolve) => {
          const cb = (res: {
            error: string;
            gameSettings: GameSettings;
            round: Round;
          }): void => {
            resolve(res);
          };
          APIService.socket.emit("game:start", roomId, cb);
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  gameUpdateName: async ({
    name,
    roomId,
  }: {
    name: string;
    roomId: string;
  }): Promise<{ game?: GameRoomEntity; error?: string } | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve, reject) => {
          const cb = (res: { error: string; game: GameRoomEntity }): void => {
            if (!res) reject({ error: "bad request" });
            if (res.error) {
              reject({ error: res.error });
            }
            resolve(res);
          };
          APIService.socket.emit("game:update-name", roomId, name, cb);
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  userCreate: async (
    user: User,
    roomId: string,
  ): Promise<{ user?: User; error?: string } | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve, reject) => {
          const cb = (res: { error: string; user: User }): void => {
            if (!res) reject({ error: "bad request" });
            if (res && res.error) {
              reject({ error: res.error });
            }
            resolve(res);
          };
          APIService.socket.emit("user:create", user, roomId, cb);
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  roundCreate: async (
    issueId: string,
    roomId: string,
  ): Promise<{ round?: Round; error?: string } | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve, reject) => {
          const cb = (res: { error: string; round: Round }): void => {
            if (!res) reject({ error: "bad request" });
            if (res && res.error) {
              reject({ error: res.error });
            }
            resolve(res);
          };
          APIService.socket.emit("round:create", issueId, roomId, cb);
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  roundStart: async (
    roundId: string,
    roomId: string,
  ): Promise<{ round?: Round; error?: string } | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve, reject) => {
          const cb = (res: { error: string; round: Round }): void => {
            if (!res) reject({ error: "bad request" });
            if (res && res.error) {
              reject({ error: res.error });
            }
            resolve(res);
          };
          APIService.socket.emit("round:start", roundId, roomId, cb);
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  roundStop: async (
    roundId: string,
    roomId: string,
  ): Promise<{ round?: Round; error?: string } | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve, reject) => {
          const cb = (res: { error: string; round: Round }): void => {
            if (!res) reject({ error: "bad request" });
            if (res && res.error) {
              reject({ error: res.error });
            }
            resolve(res);
          };
          APIService.socket.emit("round:stop", roundId, roomId, cb);
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  roundAddVote: async (data: {
    roomId: string;
    roundId: string;
    userId: string;
    score: string;
  }): Promise<{ round?: Round; error?: string } | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve, reject) => {
          const cb = (res: { error: string; round: Round }): void => {
            if (!res) reject({ error: "bad request" });
            if (res && res.error) {
              reject({ error: res.error });
            }
            resolve(res);
          };
          APIService.socket.emit("round:add-vote", data, cb);
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  userDelete: async (
    userId: string,
    roomId: string,
  ): Promise<{ users?: User[]; error?: string } | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve, reject) => {
          const cb = (res: { error: string; users: User[] }): void => {
            if (!res) reject({ error: "bad request" });
            if (res && res.error) {
              reject({ error: res.error });
            }
            resolve(res);
          };
          APIService.socket.emit("user:delete", userId, roomId, cb);
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
        return new Promise((resolve, reject) => {
          const cb = (res: { error: string; settings: GameSettings }): void => {
            if (!res) reject({ error: "bad request" });
            if (res && res.error) {
              reject({ error: res.error });
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
  gameUpdateState: async (
    roomId: string,
  ): Promise<GameRoomEntity | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve, reject) => {
          const cb = (res: { error: string; game: GameRoomEntity }): void => {
            if (!res) reject({ error: "bad request" });
            if (res && res.error) {
              reject({ error: res.error });
            }
            resolve(res.game);
          };
          APIService.socket.emit("game:update-state", roomId, cb);
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
  cardUpdate: async (
    card: Card,
    roomId: string,
  ): Promise<Card[] | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve) => {
          const cb = (res: { error: string; cards: Card[] }): void => {
            if (res.error) {
              throw Error(res.error);
            }
            resolve(res.cards);
          };
          APIService.socket.emit("game:card-update", card, roomId, cb);
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  cardDelete: async (
    cardId: string,
    roomId: string,
  ): Promise<Card[] | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve) => {
          const cb = (res: { error: string; cards: Card[] }): void => {
            if (res.error) {
              throw Error(res.error);
            }
            resolve(res.cards);
          };
          APIService.socket.emit("game:card-delete", cardId, roomId, cb);
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  issueAdd: async (
    issue: Issue,
    roomId: string,
  ): Promise<Issue | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve) => {
          const cb = (res: { error: string; issue: Issue }): void => {
            if (res.error) {
              throw Error(res.error);
            }
            resolve(res.issue);
          };
          APIService.socket.emit("game:issue-add", issue, roomId, cb);
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  issueDelete: async (
    issueId: string,
    roomId: string,
  ): Promise<Issue[] | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve) => {
          const cb = (res: { error: string; issues: Issue[] }): void => {
            if (res.error) {
              throw Error(res.error);
            }
            resolve(res.issues);
          };
          APIService.socket.emit("game:issue-delete", issueId, roomId, cb);
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  issueUpdate: async (
    issue: Issue,
    roomId: string,
  ): Promise<Issue[] | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve) => {
          const cb = (res: { error: string; issues: Issue[] }): void => {
            if (res.error) {
              throw Error(res.error);
            }
            resolve(res.issues);
          };
          APIService.socket.emit("game:issue-update", issue, roomId, cb);
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  sendChatMessage: async (
    message: ChatMessage,
    roomId: string,
  ): Promise<{ message?: ChatMessage; error?: string } | undefined> => {
    if (APIService.connected) {
      try {
        return new Promise((resolve, reject) => {
          const cb = (res: { error: string; message: ChatMessage }): void => {
            if (res.error) {
              reject(res);
            }
            resolve(res);
          };
          APIService.socket.emit("chat:send-message", message, roomId, cb);
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  handleSocketEvents: (dispatch: AppDispatch): void => {
    if (APIService.connected && !APIService.handleEventStarted) {
      APIService.handleEventStarted = true;
      const socket = APIService.socket;
      socket.on("game:issues-update", (data: { issues: Issue[] }): void => {
        if (data && data.issues) dispatch(updateGameIssues(data.issues));
      });
      socket.on("game:users-update", (data: { users: User[] }): void => {
        if (data && data.users) dispatch(updateGameUsers(data.users));
      });
      socket.on(
        "game:start",
        (data: { gameSettings: GameSettings; round: Round }): void => {
          if (data && data.round) dispatch(addGameRound(data.round));
          if (data && data.gameSettings)
            dispatch(updateGameSettingsState(data.gameSettings));
        },
      );
      socket.on("game:update", (data: { game: GameRoomEntity }): void => {
        if (data && data.game) dispatch(updateGame(data.game));
      });
      socket.on("round:update", (data: { round: Round }): void => {
        if (data && data.round) dispatch(roundUpdateState(data.round));
      });
      socket.on("chat:new-message", (data: { message: ChatMessage }): void => {
        if (data && data.message) dispatch(chatAddMessage(data.message));
      });
    }
  },
};

export default APIService;
