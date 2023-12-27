<template>
  <div class="player-info">
    <h3>{{ player.name }} (ID: {{ player.id }})</h3>
    <p>HP: {{ player.hp }}</p>
    <p>MP: {{ player.mp }}</p>
    <button @click="handleAttack">Attack</button>
  </div>
</template>

<script setup>
import { defineProps, inject } from 'vue';
import { Player } from '@/composables/Player';

const props = defineProps({
  player: Player,
  allPlayers: Array
});

const handleAttack = () => {
  props.player.attack(props.allPlayers);
};
</script>

<style>
/* CSS 样式 */
</style>
