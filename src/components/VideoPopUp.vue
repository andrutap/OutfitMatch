<template lang="html">
  <div class="is-video-container">
    <div :class="{'pop-up': popPop}" @click.self="popPop = false">
      <video ref="video" :src="src" preload="metadata">

      </video>
      <div class="video-controls" ref="videoControls">
        <div class="player-control">
          <i v-show="!playing" ref="play" class="material-icons">play_arrow</i>
          <i class="material-icons" v-show="playing" ref="pause">pause</i>
        </div>
        <div class="player-control">
          <div class="is-progress-bar-container">
            <div class="is-progress-bar-background">
              <div class="is-progress-bar" :style="{width: duration + '%'}">

              </div>
            </div>
          </div>
        </div>
        <div class="player-control">
          <i class="material-icons" v-show="!sound" ref="soundOn">volume_up</i>
          <i class="material-icons" v-show="sound" ref="soundOff">volume_mute</i>
        </div>
        <div class="player-control">
          <i class="material-icons" v-show="!popPop" ref="popUp">open_in_new</i>
          <i class="material-icons invert" v-show="popPop" ref="popDown">open_in_new</i>
        </div>
      </div>
      <div class="is-modal-close" v-if="popPop" :style="{top: closeTop + 'px', left: closeLeft + 'px'}" @click="popPop = false">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'src',
  ],
  data () {
    return {
      popPop: false,
      closeTop: 0,
      closeLeft: 0,
      playing: false,
      sound: false,
      duration: 0
    }
  },
  methods: {
    popIt () {
      this.popPop = true;
    },
    setCloseButton () {
      const rect = this.$refs.video.getBoundingClientRect();
      const top = rect.top - 10;
      const left = rect.left + rect.width - 10;
      const vc = this.$refs.videoControls
      this.closeTop = top;
      this.closeLeft = left;
      vc.style.top = rect.top + rect.height - 1 + 'px';
      vc.style.left = rect.left + 'px';
    },
    videoControls () {
      const video = this.$refs.video;
      const buttons = { };
      buttons.play = this.$refs.play;
      buttons.pause = this.$refs.pause;
      buttons.unmute = this.$refs.soundOn;
      buttons.mute = this.$refs.soundOff;
      buttons.pop = this.$refs.popUp;
      buttons.unPop = this.$refs.popDown;

      video.onclick = () => {
        if(!this.playing) {
          video.play();
          this.playing = true;
        } else {
          video.pause();
          this.playing = false;
        }
      }

      video.ondblclick = () => {
        if (!this.popPop) {
          this.popPop = true
        } else {
          this.popPop = false
        }
      }

      buttons.play.onclick = () => {
        video.play();
        this.playing = true;
      }

      buttons.pause.onclick = () => {
        video.pause();
        this.playing = false;
      }

      buttons.mute.onclick = () => {
        video.volume = 1;
        this.sound = false;
      }

      buttons.unmute.onclick = () => {
        video.volume = 0;
        this.sound = true;
      }

      buttons.pop.onclick = () => {
        this.popPop = true
      }

      buttons.unPop.onclick = () => {
        this.popPop = false
      }

      video.ontimeupdate = () => {
        let durationRatio = video.currentTime / video.duration;
        this.duration = durationRatio * 100;
      }

      video.onended = () => {
        this.playing = false
      }
    }
  },
  updated () {
    this.setCloseButton()
    window.addEventListener('resize', () => {
      this.setCloseButton()
    }, false);
  },
  mounted () {
    this.videoControls();
  }
}
</script>

<style lang="css">
</style>
