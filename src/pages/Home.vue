<template lang="html">
  <section class="main">
    <div class="box shadow is-default text is-center">
      <top-bar></top-bar>
      <div class="row">
        <div class="tile">

        </div>
      </div>
      <div class="row">
        <div class="tile">
          <button type="button" name="button" class="button is-primary" @click="modal('loginModal')">PARTICIPAR</button>
        </div>
      </div>
      <div class="row">
        <div class="tile">
          <button type="button" name="button" class="button is-flat is-small" @click="modal('instructionsModal')">Cómo participar</button>
          <button type="button" name="button" class="button is-flat is-small">Ver ranking</button>
        </div>
      </div>
    </div>
    <login ref="loginModal">
    </login>
    <modal ref="instructionsModal">
      <template slot="modal-body"><a href="#" class="button is-flat is-small">Ver bases</a></template>
    </modal>
  </section>
</template>

<script>
import { modalOpen } from '@/utils/mixins';
export default {
  mixins: [modalOpen]
}
</script>

<style lang="css">
</style>
