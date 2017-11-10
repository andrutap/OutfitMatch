<template lang="html">
  <nav class="nav shadow no-shadow">
    <div class="is-nav-left">
      <button type="button" name="button" class="button is-flat" @click="$emit('showInstructions')">INSTRUCCIONES</button>
    </div>
    <div class="is-nav-right">
      {{ name }}, tienes {{ score }} puntos
    </div>
  </nav>

</template>

<script>
export default {
  props: [
    'name',
    'score'
  ]
}
</script>

<style lang="css">
</style>
