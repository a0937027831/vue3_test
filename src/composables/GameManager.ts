// GameManager.ts
import { Player } from '@/composables/Player';

export class GameManager {
    private players: Player[];

    constructor(players: Player[]) {
        this.players = players;
    }

    handleAttack(attackerId: number): void {
        const attacker = this.players.find(p => p.id === attackerId);
        if (!attacker) {
            console.log(`Player with ID ${attackerId} not found.`);
            return;
        }
        attacker.performAttack(this.players);
    }
}
