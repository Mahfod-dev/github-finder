import { useState } from 'react'
import { FormEvent } from 'react'
import {useForm} from '../../hooks/useForm'

export const UsersSearch = ({search}:{search:(s:string)=> void}) => {

const {searchText,onChange,onReset} = useForm({
    searchText: ''})

const [touched,setTouched] = useState(false) 

const isDisabled = searchText.length === 0 || searchText.length < 3;

const onSubmit = (e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault()

  search(searchText)

  onReset()
  
  setTouched(false);
 
}

let errorMessage = null

if(touched && isDisabled){
  errorMessage = <p className="text-red-500">Search text must be at least 3 characters</p>
}




    const onBlur = ()=>{
        setTouched(true)
    }
    



  return (
		<div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
			<div>
				<form onSubmit={onSubmit}>
					<div className='form-control'>
						<label htmlFor='usernameInput'></label>
						<div className='relative'>
							<input
								type='text'
                id="usernameInput"
								className='w-full pr-20 bg-gray-200 input input-lg text-black'
								placeholder='Search'
								value={searchText}
								pattern='[a-z]{3,10}'
								onChange={({ target }) => {
									onChange(target.value, 'searchText');
								}}
                onBlur={onBlur}
                aria-describedby={errorMessage ? 'error-message' : undefined}
							/>
              {
                errorMessage ?  <div role='alert' id='error-message'>{errorMessage}</div> : null
              }
							<button
								type='submit'
								className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                disabled={isDisabled}
                onClick={()=> setTouched(true)}
							>
								Go
							</button>
						</div>
					</div>
				</form>
			</div>
     
        <div>
      
        </div>
      
		</div>
  );
}

