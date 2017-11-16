<template>
  <div>
    <div class="container is-fullhd">
      <section class="hero is-info">
        <nav id="navbar" class="navbar is-fixed-top " style="
          transform: translateY(0px);
        ">
          <div id="specialShadow" class="bd-special-shadow" style="opacity: 0; transform: scaleY(1);"></div>

          <div class="container">

            <div class="navbar-brand">
              <strong> <a @click="show()" :class="`has-text-${isClicked ? 'danger' : 'light'}`">ME</a></strong>
            </div>

            <div id="navMenuDocumentation" class="navbar-menu">
              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="field is-grouped">
                    <p class="control">
                      <a class="bd-tw-button button" 
                      data-social-network="Github" 
                      data-social-action="github" 
                      target="_blank" 
                      href="https://github.com/saspallow">
                        <span class="icon">
                          <i class="fa fa-github"></i>
                        </span>
                        <span>
                          Github
                        </span>
                      </a>

                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </nav>
      </section>
    </div>
    
    <modal name="modal-me"
    :width="128"
    :height="128"
    :delay="20"
    :draggable="true"
    :pivotX="0.02"
    :pivotY="0.05"
    @before-open="beforeOpen"
    @before-close="beforeClose"
    classes="img-circle"
    >
      <!-- <figure class="image is-128x128"> -->
        <img src="/static/myAvatar.svg">
      <!-- </figure> -->
    </modal>
  </div>
</template>

<style>
.img-circle {
    background-color: transparent;
    border-radius: 100%;
    box-shadow: 0 2px 20px 0 rgba(0,0,0,.4);
    border: 1px solid hsla(0,0%,100%,.65);
}
.v--modal-overlay {
    position: fixed;
    box-sizing: border-box;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    z-index: 999;
    opacity: 1;
}
.v--modal-overlay .v--modal-box {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }
</style>

<script>
export default {
  data: () => ({
    isClicked: false
  }),
  methods: {
    show () {
      this.$modal.show('modal-me')
    },
    hide () {
      this.$modal.hide('modal-me')
    },
    beforeOpen () {
      this.isClicked = !this.isClicked
    },
    beforeClose () {
      this.isClicked = !this.isClicked
    }
  }
}
</script>