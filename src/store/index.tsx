import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'

interface AppStore {
    navIsOpened: boolean,
    toggleNav: (arg?: boolean) => void
}
const useStore = create<AppStore>()((set) => ({
    navIsOpened: false,
    toggleNav(arg) {
        set(state => ({ navIsOpened: arg ? arg : !state.navIsOpened }))
    },
}))


export const useAppStore = <T,>(selector: (store: AppStore) => T): T => {
    return useStore(useShallow(selector))
}
