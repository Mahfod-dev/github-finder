import { useContext } from 'react'
import {UsersOutContext} from './Users'

export function userContext(){

    const context = useContext(UsersOutContext)

    if(!context){
        throw new Error('useUserContext must be used within a UserContextProvider')
    }
    return context

}