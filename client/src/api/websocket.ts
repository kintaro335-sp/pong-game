import { Manager } from 'socket.io-client';

const manager = new Manager('http://localhost:5001', {
  transports: ['websocket'],
});

export const socket = manager.socket('/');
