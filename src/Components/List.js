import React from "react";


const List = (props)=>{
    const {repos}= props;
    if (!repos || repos.length ===0) return <p>No repos, sorry</p>;
    return (
        <ul>
            <h2 className = 'list-head'>Carrie Presley's Public Repos</h2>
            {repos.map((repo)=>{
                return (
                    <li key = {repo.id} className = 'list'>
                    <span className = 'repo-text'>{repo.name}</span>
                    <br></br>
                    <span className = 'repo-description'>{repo.description}</span>
                    <br></br>
                    <br></br>
                    </li>
                )
            })}
        </ul>
    );
};

export default List;