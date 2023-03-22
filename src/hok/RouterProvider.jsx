import { createContext, useState } from "react";

export const AuthContext = createContext()

export const RouterProvider = ({ children }) => {
    const [user, setUser] = useState({ name: '', tel: '', mail: '', password: '' });
    const [shopList, setShopList] = useState([]);
    const [buyList, setBuyList] = useState([]);
    const [bought, setBought] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]);

    const addShop = (newItem) => {
        if (!shopList.includes(newItem)) {
            setShopList([...shopList, newItem]);
        }
    }
    const deleteAll = () => {
        setShopList([]);
    }
    const buyItem = (newItem) => {
        setBuyList([...buyList, newItem])
    }
    const RemovebuyItem = (Item) => {
        let a = []
        buyList.forEach((item, index) => {
            if (item != Item) {
                a.push(item)
            }
        })
        setBuyList(a)
    }

    const removeShop = (index) => {
        setShopList([...shopList].filter((item, id) => id !== index));
    }

    const [active, setActive] = useState(true);
    const signin = (newUser, cb) => {
        setUser(newUser)
        setActive(false)
        cb()

    }
    const signout = (cb) => {
        setUser(null)
        setActive(true)
        cb()
    }
    const value = { user, active, signin, signout, setShopList, shopList, addShop, removeShop, buyList, buyItem, RemovebuyItem, deleteAll, bought, setBought };
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}