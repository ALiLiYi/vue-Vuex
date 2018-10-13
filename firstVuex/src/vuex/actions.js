import * as Type from './mutations_type'
import state from './state'
export default{
    hornUrl({commit},url){
        commit(Type.HORN,url)
    },
    subMenu({commit},menuList){
        commit(Type.SUBMENU,menuList)
    }
}