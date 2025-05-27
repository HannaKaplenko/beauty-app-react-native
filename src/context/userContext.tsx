import React, { createContext, useContext, useState, FC } from 'react';
import { IUser } from '../entities/user/IUser';

export const UserContext = createContext<{ user: IUser | null; setUser: (user: IUser | null) => void; }>({} as any);

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserProvider: FC<any> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);

    const value = {
        user,
        setUser,
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}