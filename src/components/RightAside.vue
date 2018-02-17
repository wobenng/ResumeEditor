<template>
    <div id="leftAside">
        <Experience />
        <Skills />
    </div>
</template>

<script>
import Experience from './Experience.vue';
import Skills from './Skills.vue';


export default {
  name: 'rightAside',
  components: {Experience,Skills}
}
</script>

<style scoped lang="scss">
#leftAside{
    width: 70%;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
} 
</style>