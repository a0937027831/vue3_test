<template>
  <div class="player-card">
    <h3>{{ player.name }} (ID: {{ player.id }})</h3>
    <h3>hp : {{ player.hp }} </h3>
    <h3>mp : {{ player.mp }} </h3>
    <p>Attack Strategy: {{ attackStrategyName }}</p>
    <button @click="attack">Attack</button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  player: Object
});

const emit = defineEmits(['attack']);

const attackStrategyName = computed(() => {
  return props.player.attackStrategyName; // 假设 attackStrategyName 是 Player 类的一个属性
});


const attack = () => {
  emit('attack', props.player.id);
};
</script>

<style>
.player-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
