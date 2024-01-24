import { Module } from '@nestjs/common';
import { WebSocketGateWayS } from './websocket.gateway';
import { WebSocketService } from './websocket.service';

@Module({
  imports: [],
  providers: [WebSocketService, WebSocketGateWayS],
  controllers: [],
  exports: [],
})
export class WebSocketModule {}
