import {userContext} from './helpersContext'

export const Input = ()=>{

const {searchText,onChange,onBlur,errorMessage} = userContext()

return (

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
    
)


}