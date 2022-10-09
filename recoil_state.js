import { atom } from "recoil";

const userState = atom({
  key: 'UserList',
  default: {}
})

const equippedState = atom({
    key: 'EquippedItems',
    default: []
})

export {
    userState,
    equippedState
}