import { useState } from 'react'
import { UsersContextProps } from '../../lib/interfaces/UserContext'
import { UsersSearchGrid } from './ui/GridSearch'
import {useForm} from '../../hooks/useForm'
import {createContext} from 'react'


export const UsersOutContext = createContext({} as UsersContextProps)


export const Users = ({children}:{children:React.ReactNode}) => {

    const {searchText,onChange,onReset} = useForm({
    searchText: ''})

const [touched,setTouched] = useState(false) 

const isDisabled = searchText.length === 0 || searchText.length < 3;

let errorMessage = null

if(touched && isDisabled){
  errorMessage = <p className="text-red-500">Search text must be at least 3 characters</p>
}




    const onBlur = ()=>{
        setTouched(true)
    }


    return (
        <UsersSearchGrid>
		<UsersOutContext.Provider
			value={{
				touched,
				isDisabled,
				errorMessage,
				onBlur,
				onChange,
				searchText,
				onReset,
                setTouched
			}}
		>
			{children}
		</UsersOutContext.Provider>
        </UsersSearchGrid>
	);}



// export const UsersForm = ({search,children}:{search:(s:string)=> void,children:React.ReactNode}) => {

// const {searchText,onReset,setTouched} = userContext()


// const onSubmit = (e:FormEvent<HTMLFormElement>)=>{
//   e.preventDefault()

//   search(searchText)

//   onReset()
  
// setTouched(false)

 
// }

// return (
 
//           <form onSubmit={onSubmit}>
//               <div className='form-control'>
//                   <label htmlFor='usernameInput'></label>
//                   <div className='relative'>
//                        {children}
//                   </div>
//               </div>
//           </form>

//   );
// }


// const Input = ()=>{

// const {searchText,onChange,onBlur,errorMessage} = userContext()

// return (

// <input
// 		type='text'
//             id="usernameInput"
// 			className='w-full pr-20 bg-gray-200 input input-lg text-black'
// 			placeholder='Search'
// 			value={searchText}
// 			pattern='[a-z]{3,10}'
// 			onChange={({ target }) => {
// 				onChange(target.value, 'searchText');
// 				}}
//             onBlur={onBlur}
//             aria-describedby={errorMessage ? 'error-message' : undefined}
// 		/>
    
// )


// }

// const ErrorMessage = ()=>{
// const {errorMessage,touched} = userContext()

// return (
//     <>
//     {
//    touched ?   <div role='alert' id='error-message'>{errorMessage}</div> : null
//     }
// </>

// )	
             
              
				

// }

// export const Button = ()=>{

// const {isDisabled,setTouched} = userContext()
//     return (

// 		<button
// 								type='submit'
// 								className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
//                 disabled={isDisabled}
//                 onClick={()=> setTouched(true)}
// 							>
// 								Go
// 							</button>
//     )

// }

// export const UsersSearchGrid = ({children}:{children:React.ReactNode})=>{

//     return (

//         <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
//             <div>
//                 {children}
//             </div>
//          </div>
    

//     )


// }

// UsersOut.Input = Input;
// UsersOut.Button = Button;
// UsersOut.UsersForm = UsersForm;
// UsersOut.ErrorMessage = ErrorMessage;


