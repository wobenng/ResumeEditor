<template>
    <div id="personalInformation">
        <ul>
            <li><span>年龄</span><span>25</span></li>
            <li><span>性别</span><span>女</span></li>
            <li><span>城市</span><span>温州</span></li>
        </ul>
    </div>
</template>

<script>
import PersonalInformation from './PersonalInformation.vue';
import Skills from './Skills.vue';

export default {
  name: 'App',
  components: {PersonalInformation,Skills}
}
</script>

<style scoped lang="scss">
#personalInformation{
    width: 100%;
    border: 1px solid yellow;
} 
</style>