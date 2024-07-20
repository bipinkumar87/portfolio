<template>
  <NavBar />
  <AboutPage />
  <AcedmicPage />
  <ProjectPage />
  <FooterPage />
</template>

<script>
import NavBar from './components/NavBar.vue'
import AboutPage from './components/AboutPage.vue'
import AcedmicPage from './components/AcedmicPage.vue'
import ProjectPage from './components/ProjectPage.vue'
import FooterPage from './components/FooterPage.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    AboutPage,
    AcedmicPage,
    ProjectPage,
    FooterPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  
  
}
.bg{
  background-image:url("./assets/background.jpg");
  width: 100%;
}
</style>
