import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
// services
import { WebSocketService } from './websocket.service';

@WebSocketGateway(5001, { cors: true, namespace: '/' })
export class WebSocketGateWayS implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private wssService: WebSocketService) {}
  @WebSocketServer() wss: Server;

  handleConnection(client: Socket) {
    this.wssService.handleConnect(client, (client.handshake.headers.username as string) || '');
  }

  @SubscribeMessage('msg')
  onMsg(client: Socket, data: any) {
    console.log(data);
  }

  handleDisconnect(client: Socket) {
    this.wssService.handleDisconnect(client);
  }
}
