export const modalOpen = {
  methods: {
    modal (name) {
      this.$refs[name].show = true;
    }
  }
}
