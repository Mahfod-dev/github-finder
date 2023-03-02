import { FaLink, FaEye, FaStar, FaInfo, FaUtensils } from "react-icons/fa";
import { GithubRepos } from "../../lib/interfaces/GithubAPI";


export function ReposList({ repos }:{repos:GithubRepos[]}) {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title'>
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
}

type RepoItemProps = {
  repo: GithubRepos
}


function RepoItem({ repo }:RepoItemProps) {


	return (
		<div className='mb-2 rounded-md card bg-base-200 hover:bg-base-300'>
			<div className='card-body'>
				<h3 className='mb-2 text-xl font-semibold'>
					<a href={repo.html_url}>
						<FaLink className='inline mr-1' /> {repo.name}
					</a>
				</h3>
				<p className='mb-3'>{repo.description}</p>
				<div>
					<div className='mr-2 badge badge-info badge-lg'>
						<FaEye className='mr-2' /> {repo.watchers_count}
					</div>
					<div className='mr-2 badge badge-success badge-lg'>
						<FaStar className='mr-2' /> {repo.stargazers_count}
					</div>
					<div className='mr-2 badge badge-error badge-lg'>
						<FaInfo className='mr-2' /> {repo.open_issues}
					</div>
					<div className='mr-2 badge badge-warning badge-lg'>
						<FaUtensils className='mr-2' /> {repo.forks}
					</div>
				</div>
			</div>
		</div>
	);
}