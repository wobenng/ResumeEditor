import Vuex from 'vuex'
import Vue from 'vue'
import $ from 'jquery'
 Vue.use(Vuex)

 export default new Vuex.Store({
        state: {
            fullname: '董杭彬',
            avatarSrc: '',
            notShowImage: true
        },
        getters: {
            firstName: state => {
              return state.fullname.charAt(0);
            }
        },
        mutations: {
            uploadAvator(state,avatar){
                var reader  = new FileReader();
                reader.addEventListener("load", function () {
                    state.avatarSrc = reader.result;
                    state.notShowImage = false;
                }, false);

                if (avatar) {
                  reader.readAsDataURL(avatar);
                }   
            },
            changeName(state,name){
                state.fullname = name.replace(/[\s]*/g, "")
            }
        }
    })
