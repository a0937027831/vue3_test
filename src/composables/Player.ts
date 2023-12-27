// Player.ts
import { AttackStrategy } from '@composables/AttackStrategy';

export class Player {
    public name: string;
    public id: number;
    private hp: number;
    private mp: number;
    private attackStrategy: AttackStrategy;

    constructor(name: string, id: number, hp: number, mp: number, attackStrategy: AttackStrategy) {
        this.name = name;
        this.id = id;
        this.hp = hp;
        this.mp = mp;
        this.attackStrategy = attackStrategy;
    }

    performAttack(players: Player[]): void {
        this.attackStrategy.execute(this, players);
    }

    takeDamage(damage: number): void {
        this.hp = Math.max(this.hp - damage, 0);
        console.log(`${this.name} 受到 ${damage} 点伤害，剩余生命值：${this.hp}`);
    }
}

export class Warrior extends Player {
    constructor(name: string, id: number,hp: number, mp: number, attackStrategy: AttackStrategy) {
        super(name, id, hp, mp, attackStrategy);
    }
}

export class Mage extends Player {
    constructor(name: string, id: number,hp: number, mp: number, attackStrategy: AttackStrategy) {
        super(name, id, hp, mp, attackStrategy);
    }
}
