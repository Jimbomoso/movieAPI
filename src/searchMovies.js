import React from 'react';

export default function SearchMovies(){

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("Submitting");
    }
    return (
        <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="label">Movie name</label>
            <input className="input" type="text" name="query" placeholder="i.e. The Matrix"></input>
            <button className="button" type="submit">Search</button>
        </form>
    )
}
