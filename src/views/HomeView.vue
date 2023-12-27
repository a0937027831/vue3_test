<template>
  <div class="game">
    <PlayerComponent 
      v-for="player in players" 
      :key="player.id" 
      :player="player"
      @attack="handleAttack"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PlayerComponent from '@/components/PlayerComponent.vue';
import { WarriorAttackStrategy, MageAttackStrategy } from '@/composables/AttackStrategy';
import { Warrior, Mage } from '@/composables/Player';
import { GameManager } from '@/composables/GameManager';

const players = ref([
  new Warrior('Warrior John', 1, 100, 50, new WarriorAttackStrategy()),
  new Mage('Mage Jane', 2, 100, 50, new MageAttackStrategy()),
  // ...其他玩家实例
]);


const gameManager = new GameManager(players.value);

const handleAttack = (attackerId) => {
  gameManager.handleAttack(attackerId);
};
</script>

<style>
/* CSS 样式 */
.game {
  margin: 10px;
}

.player {
  margin-bottom: 10px;
}
</style>
