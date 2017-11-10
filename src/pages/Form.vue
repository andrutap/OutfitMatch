<template lang="html">
  <section class="main">
    <div class="box shadow is-default">
      <top-bar></top-bar>
      <div class="row">
        <div class="tile">

        </div>
        <div class="tile is-7">
          <form class="form shadow is-default text is-right">
            <legend>Completa el formulario para participar</legend>
            <div class="is-form-object">
              <div class="row is-gapless">
                <div class="tile is-2">
                  <label for="name">Nombre:</label>
                </div>
                <div class="tile">
                    <input type="text" name="first_name" v-model="user.name" placeholder="Ej. María González" required @blur="validarNombre">
                </div>
                <div class="tile is-3" v-if="nameError">
                  <err errType="nombre"></err>
                </div>
              </div>
            </div>
            <div class="is-form-object">
              <div class="row is-gapless">
                <div class="tile is-2">
                    <label for="rut">Rut:</label>
                </div>
                <div class="tile">
                  <input type="text" name="rut" v-model="user.rut" placeholder="12345678-9" required @blur="validarRut">
                </div>
                <div class="tile is-3" v-if="rutError">
                  <err  errType="rut"></err>
                </div>
              </div>
            </div>
            <div class="is-form-object">
              <div class="row is-gapless">
                <div class="tile is-2">
                  <label for="email">Email:</label>
                </div>
                <div class="tile">
                  <input type="email" name="email" v-model="user.email" required placeholder="maria@email.com" @blur="validarEmail">
                </div>
                <div class="tile is-3" v-if="mailError">
                  <err  errType="email"></err>
                </div>
              </div>
            </div>
            <div class="is-form-object">
              <div class="row is-gapless">
                <div class="tile is-2">
                  <label for="phone">Teléfono:</label>
                </div>
                <div class="tile">
                  <input type="tel" name="phone" v-model="user.phone" required placeholder="912345678" @blur="validarTelefono">
                </div>
                <div class="tile is-3" v-if="phoneError">
                  <err errType="teléfono"></err>
                </div>
              </div>
            </div>
            <div class="is-form-object">
              <label for="checkbox"><input type="checkbox" id="checkbox" v-model="checked"> Acepto <a href="#">términos y condiciones</a></label>
            </div>
            <div class="is-form-object">
              <button type="button" name="button" class="button is-primary" @click="validate" ref="formSubmit" :disabled="!disabled">Participar</button>
            </div>
          </form>
        </div>
        <div class="tile">

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data () {
    return {
      phoneError: false,
      mailError: false,
      rutError: false,
      nameError: false,
      checked: false
    }
  },
  methods: {
    ...mapActions([
      'didLogin'
    ]),
    validarTelefono (event) {
      const num = /^\d{9}$/;
      if (event.target.value.length >= 1) {
        if (num.test(this.user.phone) && this.user.phone.length === 9) {
          this.phoneError = false;
        } else {
          this.phoneError = true;
        }
      }
    },
    validarNombre (event) {
      const name = /[A-Za-z\u00E0-\u00FC ]/
      if (event.target.value.length > 1) {
        if (name.test(event.target.value)) {
          this.nameError = false
        } else {
          this.nameError = true
        }
      } else {
        this.nameError = true
      }
    },
    validarEmail (event) {
      const mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(event.target.value.length >= 1) {
        if (mail.test(this.user.email)) {
          this.mailError = false;
        } else {
          this.mailError = true;
        }
      }
    },
    validarRut () {
      this.user.rut = this.user.rut.toLowerCase().replace(/\./g, '');
      if (!/^[0-9]+[-|-]{1}[0-9kK]{1}$/.test(this.user.rut)) {
        this.rutError = true;
      } else {
        const tmp = this.user.rut.split('-');
        const digv = tmp[1];
        let rut = tmp[0];
        let M = 0;
        let S = 1;
        for (; rut; rut = Math.floor(rut / 10)) {
          S = ( S + rut % 10 * (9 - M++ % 6)) % 11;
        }
        S = S ? S - 1 : 'k';
        if (S == digv) {
          this.rutError = false;
        } else {
          this.rutError = true;
        }
      }
    },
    validate () {
        this.didLogin(true);
        this.$router.push('/play')
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ]),
    disabled () {
      if (!this.rutError && this.user.rut != null && !this.mailError && this.user.email != null && !this.phoneError && this.user.phone != null && !this.nameError && this.user.name != null && this.checked) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="css">
</style>
