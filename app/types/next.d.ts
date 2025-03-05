import { Server } from "http";
import { WebSocketServer } from "ws";

declare module "next" {
  interface NextApiResponse {
    end(): unknown;
    socket: {
      server: Server & {
        wss?: WebSocketServer;
      };
    };
  }
}
