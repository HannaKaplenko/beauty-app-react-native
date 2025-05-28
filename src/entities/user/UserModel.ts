import { create } from 'zustand'
import { IUser } from './IUser'

interface IUserStore {
    user: IUser | null,
    setUser: (newUser: IUser) => void;
}

export const userStore = create<IUserStore>((set) => ({
    user: null,
    setUser: (newUser: IUser) => set({ user: newUser }),
}))


