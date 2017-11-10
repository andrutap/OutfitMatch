<template lang="html">
  <div class="modal" v-if="show">
    <div class="is-modal-container">
      <span class="is-modal-close" @click="show = false"></span>
      <div class="is-modal-heading">
        <h4 class="text is-small">Regístrate</h4>
      </div>
      <div class="is-modal-body">
        <form class="form is-inline">
          <legend>
            Participa ingresando con Facebook o Twitter
          </legend>
          <div class="is-form-object" v-for="button in buttons" :key="button.name">
            <button :disabled="disabled" type="button" name="button" class="button" :class="'is-' + button.name.toLowerCase()" @click="login(button.name)">Ingresar con {{ button.name }}</button>
          </div>
        </form>
      </div>
      <div class="is-modal-footer">
        <slot name="modal-footer">

        </slot>
      </div>
    </div>
  </div>
</template>

<script>
const jsonp = require('jsonp');
import { tw_login } from '@/utils/javascript'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      show: false,
      disabled: false
    }
  },
  methods: {
    login(name) {
      this.disabled = true;
      if (name === 'Twitter') {
        this.twitterLogin();
      } else if (name === 'Facebook') {
        this.facebookLogin();
      }
    },
    twitterLogin () {
      window.open(tw_login);
      const _this = this;
      window.addEventListener('hashchange', () => {
        if (window.location.hash.indexOf('tw_ok') > 0) {
          window.location.hash = '';
          jsonp(tw_login + 'profile.php', null, (err, data) => {
            if (err) {
              alert('Ha ocurrido un error, por favor inténtalo de nuevo');
              _this.$router.push('/home');
            } else {
              console.log(data)
              this.saveData(data)
            }
          })
        }
      })
    },
    facebookLogin () {
      const _this = this;
      FB.getLoginStatus((response) => {
        if (response.status == 'connected') {
          _this.getFacebookData(response)
        } else {
          FB.login((response) =>{
            if (response.status === 'connected') {
              _this.getFacebookData(response)
            }
          }, {scope:'public_profile, email'})
        }
      })
    },
    getFacebookData() {
      FB.api('/me', {fields: 'id, link, picture, first_name, last_name, email'}, (data) => {
        console.log(data)
        this.saveData(data)
      })
    },
    saveData(data) {
      this.user.name = data.first_name === null ? '' : data.first_name;
      this.user.last_name = data.last_name === null ? '' : data.last_name;
      this.user.email = data.email === null ? '' : data.email;
      this.user.phone = data.phone === null ? '' : data.phone;
      if (data.id != null) {
        this.user.picture = data.picture.data.url === null ? '' : data.picture.data.url
        this.user.login_type = 'fb'
        this.user.profile = data.link
      } else {
        this.user.picture = data.picture === null ? '' : data.picture;
        this.user.login_type = data.login_type === null ? '' : data.login_type;
        this.user.profile = data.profile;
      }
      this.$router.push('/form');
    }
  },
  computed: {
    ...mapGetters([
      'buttons',
      'user'
    ])
  }
}
</script>

<style lang="css">
</style>
