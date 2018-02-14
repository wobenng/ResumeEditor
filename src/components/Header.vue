<template>
  <div id="header">
      <div id="avatar">
          <div id="defaultAvatar"></div>
          <input type="file" id="userAvatar">
      </div>
      <div id="nameAndJob">
          <span id="name">董杭彬</span>
          <span id="job">前端开发</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
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
        width: 100px;
        height: 100px;
        overflow: hidden;
        border: 1px solid red;
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
            height: 100%;
            top: 0px;
            left: 0px;
            border: 1px solid blue;
        }
    }
}
</style>
