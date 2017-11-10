<template lang="html">
  <div class="error">
    Hay un error en tu {{ errType }}
  </div>
</template>

<script>
export default {
  props: {
    errType: {
      type: String
    }
  }
}
</script>

<style lang="css">
</style>
