import * as Type from './mutations_type'
import state from './state'
export default{
    [Type.HORN](state,url){
        state.horn = url;
    },
    [Type.SUBMENU](state,menuList){
        state.submenu = menuList
    }
}