<template>
  <div id="header">
      <div id="avatar">
            <div id="defaultAvatar">
                <span v-if="notShowImage">{{firstName}}</span>
                <img v-else  :src="avatarSrc">
            </div>
            <input type="file" id="userAvatar"  @change="uploadAvator">
      </div>
      <div id="nameAndJob">
          <input id="name" :value="fullName"  @input="changeName">
          <input id="job" value="前端开发">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
      return{
 
      }
  },
  computed: {
      firstName(){
          return this.$store.getters.firstName;
      },
      fullName(){
          return this.$store.state.fullname;
      },
      avatarSrc(){
          return this.$store.state.avatarSrc;
      },
      notShowImage(){
          return this.$store.state.notShowImage;
      }
  },
  methods: {
    uploadAvator (e) {
      this.$store.commit('uploadAvator', e.target.files[0])
    },
    changeName(e){
        this.$store.commit('changeName', e.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
#header{
    width: 100%;
    padding: 70px 100px; 
    display: flex;
    flex-direction: row;
    background: #f6f7f7;
    #avatar{
        width: 150px;
        height: 150px;
        overflow: hidden;
        position: relative;
        #userAvatar{
            color: transparent;
            width: 100%;
            height: 100%;
            opacity: 0;
        }
        #defaultAvatar{
            position: absolute;
            width: 100%;
            top: 0px;
            left: 0px;
            height: 100%;
            line-height: 100%;
            font-size: 100px;
            background: #5f6e7f;
            color: #6ac79d;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    #nameAndJob{
        display: flex;
        flex-direction: column;
        align-items: start;
        input{
            margin-left: 20px;
            border: none;
            background-color: transparent;
            outline: none;
        }
        input:first-child{
            font-size: 24px;
            margin-bottom: 5px;
        }
        input:last-child{
            font-size: 16px;
        }
    }
}
</style>
