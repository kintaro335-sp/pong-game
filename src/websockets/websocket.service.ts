import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

interface Conections {
  [id: string]: {
    client: Socket;
    userName: string;
  };
}

@Injectable()
export class WebSocketService {
  private connections: Conections = {};
  private index: Record<string, string> = {};
  private serverList = [];
  private servers: Record<string, string | null> = {};

  handleConnect(client: Socket, userName: string) {
    this.index[userName] = client.id;
    this.connections[client.id] = { client, userName };
  }

  sendBallData() {}

  handleDisconnect(client: Socket) {
    delete this.connections[client.id];
  }
}
