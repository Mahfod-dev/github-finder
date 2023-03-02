import {userContext} from './helpersContext'

export const Button = ()=>{

const {isDisabled,setTouched} = userContext()
    return (

		<button
								type='submit'
								className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                disabled={isDisabled}
                onClick={()=> setTouched(true)}
							>
								Go
							</button>
    )

}