import React from 'react';
import {connect} from 'react-redux';

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

import { addMovie } from '../actions/movieActions';
import Movie from './Movie';


const MovieList = (props)=> {
    const {movies }= props;



    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}

const mapStateToProps = state => ({
    movies: state.movieReducer.movies
});

export default connect(mapStateToProps)(MovieList);