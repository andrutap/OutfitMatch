<template lang="html">
  <section class="main">
    <div class="box shadow is-default">
      <play-navigation
                    :name="user.name"
                    :score="user.score"
                    @showInstructions="modal('instructions')">
      </play-navigation>
      <div class="row">
        <div class="tile is-3">
          <video-popup
          :src="'static/outfits/videos/video1.mp4'"></video-popup>
        </div>
        <div class="tile">
          <div class="row">
            <div class="tile">
              <play-outfits
                :outfits="articles"
                :condition="true">
              </play-outfits>
            </div>
          </div>
          <div class="row">
            <div class="tile">
              <play-outfits
                :outfits="articles"
                :condition="false">
              </play-outfits>
            </div>
          </div>
        </div>
      </div>
      <div class="row is-gapless text is-center">
        <div class="tile">
          <button type="button" name="button" class="button is-primary" @click="getMatch" :disabled="disabled" ref="matchButton">Comprobar</button>
        </div>
      </div>
    </div>
    <modal ref="instructions">
      <template slot="modal-body">
        Instrucciones
      </template>
    </modal>
  </section>
</template>

<script>
import PlayNavigation from '@/components/Play/PlayNavigation';
import PlayOutfits from '@/components/Play/PlayOutfits';
import VideoPopUp from '@/components/VideoPopUp';
import { mapGetters, mapActions } from 'vuex';
import { modalOpen } from '@/utils/mixins';
export default {
  components: {
    'PlayNavigation': PlayNavigation,
    'PlayOutfits': PlayOutfits,
    'VideoPopup': VideoPopUp
  },
  mixins: [modalOpen],
  data () {
    return {
      articles: [
          {
            name: 'hmls2',
            id: 39694,
            match: 24137
          },
          {
            name: 'hmysh',
            id: 24137,
            match: 39694
          },
          {
            name: 'hmprod',
            id: 61979,
            match: 59719
          },
          {
            name: 'hmpantw9',
            id: 59719,
            match: 61979
          },
          {
            name: 'hmprod3',
            id: 63732,
            match: 69863
          },
          {
            name: 'hmprodpantalon',
            id: 69863,
            match: 63732
          },
          {
            name: 'toptop',
            id: 66739,
            match: 73635
          },
          {
            name: 'falda',
            id: 73635,
            match: 66739
          },
          {
            name: 'camist',
            id: 87648,
            match: 97848
          },
          {
            name: 'pants',
            id: 97848,
            match: 87648
          }
      ],
    }
  },
  methods: {
    ...mapActions([
      'didLogin'
    ]),
    getMatch () {
      const selected = document.querySelectorAll('.selected');
      for (let i = 0; i < this.articles.length; i += 1) {
        if (this.articles[i].id == selected[0].firstChild.id) {
          if (this.articles[i].match == selected[1].firstChild.id) {
            alert('It matches !');
            selected[0].parentNode.removeChild(selected[0])
            selected[1].parentNode.removeChild(selected[1])
            this.$refs.matchButton.disabled = true;
          } else {
            alert('no match');
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'login'
    ]),
    disabled () {
      return true
    }
  },
  mounted () {
    console.log(this.user)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.selected {
  border: thin solid red;
}
</style>
