import { RsvpService } from './services/RsvpService';
import { Logger } from './utils/Logger';
import { Player } from './models/RsvpTypes';

const logger = new Logger();
const service = new RsvpService(logger);

const players: Player[] = [
  { id: '1', name: 'Sid' },
  { id: '2', name: 'Sahil' },
  { id: '3', name: 'Rohan' }
];

service.addOrUpdateRsvp(players[0], 'Yes');
service.addOrUpdateRsvp(players[1], 'No');
service.addOrUpdateRsvp(players[2], 'Yes');

console.log(service.getConfirmedAttendees());
console.log(service.getCounts());
