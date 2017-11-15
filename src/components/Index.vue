<template>
  <section class="hero is-dark is-fullheight">
    <Navbar></Navbar>
    <Body></Body>
    <Footer></Footer>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar'
import Body from '@/components/Body'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Body,
    Footer
  }
}
</script>

