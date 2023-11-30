import { create } from 'zustand'

interface UserStore {
  userName: string
  num: number
  changeName: () => void
  changeNum: () => void
}
export const useUserStore = create<UserStore>((set) => ({
  userName: 'Name',
  num: 0,
  changeName: () => set({ userName: 'NewName' }),
  changeNum: () => set((state) => ({ num: state.num + 1 }))
}))
