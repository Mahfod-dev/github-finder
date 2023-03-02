
import { useState } from 'react'
import {UsersResults,UsersSearch} from '../components'

// import { Input } from '../components/component-compound/UserInput'
// import { Button } from '../components/component-compound/UserButton'
// import { ErrorMessage } from '../components/component-compound/UserError'
// import {UsersForm} from '../components/component-compound/UserForm'
import {Users,UsersForm,ErrorMessage,Button,Input,} from '../components/component-compound'

export const HomePage = () => {

  const [userName,setUserName] = useState('')

  const search = (searchText:string)=>{

    setUserName(searchText)
  }

 


  return (
    <>
    {/* <UsersSearch search={search}/> */}

   
    <Users>
        <UsersForm search={search}>
        <Input/>
        <Button/>
        <ErrorMessage/>
        </UsersForm>
        {/* <UsersOut.Input/> */}
        {/* <UsersOut.Input/> */}
        {/* <UsersOut.Button/> */}
        {/* <UsersOut.ErrorMessage/> */}
    </Users>
  <UsersResults username={userName}/>
    
    </>
  )
}