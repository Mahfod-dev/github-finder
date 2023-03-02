import { useQuery } from "@tanstack/react-query"
import { fetchGitHub } from "../../lib/api/fetchGithub"
import { Item } from '../../lib/interfaces/GithubAPI'
import {Spinner} from '../../Layouts'
import {Link} from 'react-router-dom'



export const UsersResults = ({username}:{username:string}) => {


  const {data:users,isError,isLoading,error} = useQuery({
    queryKey: ['usersName', username],
    queryFn: () => fetchGitHub(username),
   
  })

 if(isLoading) return <Spinner/>

 if(error instanceof Error){

  return <div>{error.toString()}</div>

 }
 
 if(isError) return <div>Something went wrong</div>
     

  return (
    <>
    
    <UsersList users={users.items}/>
    
    </>
  )
}

export const UsersList = ({users}:{users:Item[]})=>{

return (
<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
 {
        users?.map((user:Item) => (
          <UserCard key={user.id} login={user.login} url={user.avatar_url} />
      ))
    }

    </div>

)
}

export const UserCard = ({login,url}:{login:string,url:string})=>{

  return (
        <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={url} alt='Profile' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='card-title'>{login}</h2>
          <Link
            className='text-base-content text-opacity-40'
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>

  )

}


