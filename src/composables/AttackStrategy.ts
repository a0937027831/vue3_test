import { Player } from '@/composables/Player';

export interface AttackStrategy {
    execute(attacker: Player, players: Player[]): void;
}

export class WarriorAttackStrategy implements AttackStrategy {
    execute(attacker: Player, players: Player[]): void {
        // 过滤出除了攻击者外的其他活着的玩家
        const otherPlayers = players.filter(p => p.id !== attacker.id && p.hp > 0);

        if (otherPlayers.length === 0) {
            console.log(`${attacker.name} 没有其他玩家可以攻击。`);
            return;
        }

        // 找出血量最低的玩家
        const target = otherPlayers.reduce((lowest, player) => 
            (lowest.hp < player.hp ? lowest : player), otherPlayers[0]);

        // 执行攻击动作
        console.log(`${attacker.name} 攻击了血量最低的玩家 ${target.name}。`);
        target.takeDamage(3);
        // 可以在这里调用 target 的受伤害方法，例如:
        // target.takeDamage(计算的伤害值);
        // 注意：确保 Player 类有 takeDamage 方法或类似的机制
    }
}


export class MageAttackStrategy implements AttackStrategy {
    execute(attacker: Player, players: Player[]): void {
        console.log(`${attacker.name} (Mage) casts a spell.`);
        // Mage 攻击逻辑...
    }
}
