<template>
    <div id="leftAside">
        <PersonalInformation />
        <Education />
    </div>
</template>

<script>
import PersonalInformation from './PersonalInformation.vue';
import Education from './Education.vue';

export default {
  name: 'leftAside',
  components: {PersonalInformation,Education}
}
</script>

<style scoped lang="scss">
#leftAside{
    width: 30%;
    border: 1px solid yellow;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
} 
</style>