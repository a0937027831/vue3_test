// Player.ts
export interface PlayerOptions {
  name: string;
  id: number;
  hp?: number;
  mp?: number;
}

// Player.ts
export class Player {
  private _hp: number;
  private _mp: number;
  public name: string;
  public id: number;

  constructor(options: PlayerOptions) {
    this.name = options.name;
    this.id = options.id;
    this._hp = options.hp ?? 100;
    this._mp = options.mp ?? 50;
  }

  get hp(): number {
    return this._hp;
  }

  set hp(value: number) {
    this._hp = Math.max(value, 0); // 确保生命值不会低于0
  }

  get mp(): number {
    return this._mp;
  }

  set mp(value: number) {
    this._mp = Math.max(value, 0); // 确保魔法值不会低于0
  }

  attack(players: Player[]): void {
    console.log(`${this.name} attacks with a basic attack.`);
  }

  takeDamage(damage: number): void {
    this.hp -= damage; // 使用 setter 来减少生命值
  }

  useMagic(cost: number): void {
    this.mp -= cost; // 使用 setter 来减少魔法值
  }
}

export class Warrior extends Player {
  override attack(players: Player[]): void {
    const otherPlayers = players.filter(p => p.id !== this.id && p.hp > 0);
    if (otherPlayers.length === 0) {
      console.log(`${this.name} finds no one else to attack.`);
      return;
    }
    const maxHp = Math.max(...otherPlayers.map(p => p.hp));
    const highestHpPlayers = otherPlayers.filter(p => p.hp === maxHp);
    const target = highestHpPlayers[Math.floor(Math.random() * highestHpPlayers.length)];
    
    console.log(`${this.name} attacks ${target.name} who has the highest HP of ${target.hp}.`);
    // 此处应调用 target 的受伤害方法，而不是直接修改 hp
    target.takeDamage(this.calculateDamage());
  }

  private calculateDamage(): number {
    // 计算 Warrior 的攻击伤害值
    // 此处返回一个固定值或计算得出的值
    return 20; // 示例伤害值
  }
}

export class Mage extends Player {
  override attack(players: Player[]): void {
    const otherPlayers = players.filter(p => p.id !== this.id && p.hp > 0);
    if (otherPlayers.length === 0) {
      console.log(`${this.name} finds no one else to attack.`);
      return;
    }
    const minHp = Math.min(...otherPlayers.map(p => p.hp));
    const lowestHpPlayers = otherPlayers.filter(p => p.hp === minHp);
    const target = lowestHpPlayers[Math.floor(Math.random() * lowestHpPlayers.length)];
    
    console.log(`${this.name} attacks ${target.name} who has the lowest HP of ${target.hp}.`);
    // 此处应调用 target 的受伤害方法，而不是直接修改 hp
    target.takeDamage(this.calculateDamage());
  }

  private calculateDamage(): number {
    // 计算 Mage 的攻击伤害值
    // 此处返回一个固定值或计算得出的值
    return 15; // 示例伤害值
  }
}

// Rogue 类的实现
export class Rogue extends Player {
  // Rogue 的特定攻击行为
  override attack(players: Player[]): void {
    // 实现 Rogue 的攻击逻辑
  }
}

// Priest 类的实现
export class Priest extends Player {
  // Priest 的特定攻击行为
  override attack(players: Player[]): void {
    // 实现 Priest 的攻击逻辑
  }
}

// Archer 类的实现
export class Archer extends Player {
  // Archer 的特定攻击行为
  override attack(players: Player[]): void {
    // 实现 Archer 的攻击逻辑
  }
}
