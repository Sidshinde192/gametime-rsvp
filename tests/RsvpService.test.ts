import { RsvpService } from '../src/services/RsvpService';
import { Logger } from '../src/utils/Logger';
import { Player } from '../src/models/RsvpTypes';

describe('RsvpService', () => {
  const logger = new Logger();
  const service = new RsvpService(logger);

  const player: Player = { id: '1', name: 'Sid' };

  it('should add a player RSVP', () => {
    service.addOrUpdateRsvp(player, 'Yes');
    const confirmed = service.getConfirmedAttendees();
    expect(confirmed).toContainEqual(player);
  });

  it('should return correct counts', () => {
    const counts = service.getCounts();
    expect(counts.total).toBeGreaterThan(0);
    expect(counts.confirmed).toBeGreaterThan(0);
  });
});
