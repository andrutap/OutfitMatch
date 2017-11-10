<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
window.fbAsyncInit = function() {
    FB.init({
      appId            : '1196810757132230',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.10'
    });
  };

  (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
  @import "assets/sass/estilo.sass";
</style>
