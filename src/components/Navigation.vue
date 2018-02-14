<template>
    <div id="navigation">
        <div id="qq">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-email"></use>
            </svg>
            <span id="qqNumber">493953140</span>
        </div>
      <div id="mobilePhone">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-qq1"></use>
            </svg>
            <span id="mobilePhoneNumber">15167704591</span>
      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
      <div id="email">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dianhua2"></use>
            </svg>
            <span id="emailNumber">493953140@qq.com</span>
      </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
#navigation{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 100px;
    #qq,#mobilePhone,#email{
        display: flex;
        align-items: center;
    }
    #qq .icon,
    #mobilePhone .icon,
    #email .icon {
        width: 25px;
        height: 25px;
        color: black;
    }
}

</style>
