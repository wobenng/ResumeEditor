<template>
  <div id="app">
    <Header />
    <Navigation />
    <SelfIntroduction />
    <main>
        <LeftAside />
        <RightAside />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import SelfIntroduction from './components/SelfIntroduction.vue';
import LeftAside from './components/LeftAside.vue';
import RightAside from './components/RightAside.vue';

export default {
  name: 'App',
  components: {Header,Navigation,SelfIntroduction,LeftAside,RightAside}
}
</script>

<style scoped lang="scss">
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body{
  padding: 20px;
  width: 100vw;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  border: 1px solid gray;
  main{
    display: flex;
    flex-direction: row;
  }
}
</style>
