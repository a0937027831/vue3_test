<template>
  <div class="game">
    <PlayerComponent 
      v-for="player in players" 
      :key="player.id" 
      :player="player" 
      :allPlayers="players"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PlayerComponent from '@/components/PlayerComponent.vue';
import { Warrior, Mage, Rogue, Priest, Archer } from '@/composables/Player';

// 使用配置对象创建玩家实例
const players = ref([
  new Warrior({ name: 'Warrior John', id: 1 }),
  new Mage({ name: 'Mage Jane', id: 2 }),
  // 其他玩家
  // ...
]);
</script>

<style>
/* CSS 样式 */
</style>
