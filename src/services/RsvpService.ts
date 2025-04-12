import { RsvpEntry, RsvpStatus, Player } from '../models/RsvpTypes';
import { Logger } from '../utils/Logger';

export class RsvpService {
  private entries: Map<string, RsvpEntry> = new Map();

  constructor(private logger: Logger) {}

  addOrUpdateRsvp(player: Player, status: RsvpStatus): void {
    this.entries.set(player.id, { player, status });
    this.logger.log(`Updated RSVP for ${player.name} to ${status}`);
  }

  getConfirmedAttendees(): Player[] {
    return Array.from(this.entries.values())
      .filter(entry => entry.status === 'Yes')
      .map(entry => entry.player);
  }

  getCounts() {
    let total = this.entries.size;
    let confirmed = 0;
    let declined = 0;

    this.entries.forEach(entry => {
      if (entry.status === 'Yes') confirmed++;
      if (entry.status === 'No') declined++;
    });

    return { total, confirmed, declined };
  }
}
