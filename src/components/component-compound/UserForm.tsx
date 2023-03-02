import {FormEvent} from 'react'
import {userContext} from './helpersContext'



export const UsersForm = ({search,children}:{search:(s:string)=> void,children?:React.ReactNode}) => {

const {searchText,onReset,setTouched} = userContext()

const onSubmit = (e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
 
  search(searchText)

  onReset()
  
setTouched(false)

 
}

return (
 
          <form onSubmit={onSubmit}>
              <div className='form-control'>
                  <label htmlFor='usernameInput'></label>
                  <div className='relative'>
                       {children}
                  </div>
              </div>
          </form>

  );
}