import { GithubAPI, GithubDetailAPI,GithubRepos } from "../interfaces/GithubAPI";


export const fetchGitHub = (query = ''):Promise<GithubAPI> => {
    return fetch(`https://api.github.com/search/users?q=${query}`,{
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization':`token ${import.meta.env.VITE_API_KEY}`,
        },
    })
        .then((res) => res.json())
        .then((data:GithubAPI) => {
        return data;
        });
    };


 export const fetchDetailsGithub = (username=''):Promise<GithubDetailAPI> => {
    
    return fetch(`https://api.github.com/users/${username}`,{
  method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization':`token ${import.meta.env.VITE_API_KEY}`,
        },
 })  .then((res) => res.json())
        .then((data:GithubDetailAPI) => {
        return data;
        });

}
 export const fetchReposGithub = (username:string=''):Promise<GithubRepos[]> => {
    
    return fetch(`https://api.github.com/users/${username}/repos`,{
  method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization':`token ${import.meta.env.VITE_API_KEY}`,
        },
 })  .then((res) => res.json())
        .then((data:GithubRepos[]) => {
        return data;
        });

}
