import { useContext } from "react"
import { AuthContext } from "../hok/RouterProvider"

export const useAuth = () => {
    return useContext(AuthContext)
}