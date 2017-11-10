<template lang="html">
  <ul class="horizontal-list outfit">
    <li v-for="(outfit, index) in outfits" :key="outfit.id" v-if="condition === true ? index % 2 === 0 : index % 2 !== 0" @click="setSelected">
      <img :src="'static/outfits/' + outfit.name + '.jpg'" :id="outfit.id"/>
    </li>
  </ul>
</template>

<script>
export default {
  props: [
    'outfits',
    'condition'
  ],
  methods: {
    setSelected (event) {
      event.target.parentNode.classList.add('selected')
      const siblings = this.getSiblings(event.target.parentNode)
        for (let i = 0; i < siblings.length; i += 1) {
          if (siblings[i].classList.contains('selected')) {
            siblings[i].classList.remove('selected')
          }
        }
      const selected = document.querySelectorAll('.selected')
      if (selected.length == 2) {
        this.$parent.$refs.matchButton.disabled = false
      }
    },
    getChildren (n, skipMe) {
      let r = [];
      for ( ; n; n = n.nextSibling) {
        if (n.nodeType == 1 && n != skipMe) {
          r.push(n)
        }
      }
      return r;
    },
    getSiblings(n) {
      return this.getChildren(n.parentNode.firstChild, n)
    }
  }
}
</script>

<style lang="css">
</style>
