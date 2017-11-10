<template lang="html">
  <div class="modal" v-if="show">
    <div class="is-modal-container">
      <span class="is-modal-close" @click="show = false"></span>
      <div class="is-modal-heading">
        <slot name="modal-heading">

        </slot>
      </div>
      <div class="is-modal-body">
        <slot name="modal-body">

        </slot>
      </div>
      <div class="is-modal-footer">
        <slot name="modal-footer">

        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>

<style lang="css">
</style>
