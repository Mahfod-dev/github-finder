import {userContext} from './helpersContext'

export const ErrorMessage = ()=>{
const {errorMessage,touched} = userContext()

return (
    <>
    {
   touched ?   <div role='alert' id='error-message'>{errorMessage}</div> : null
    }
</>

)	
             
              
				

}