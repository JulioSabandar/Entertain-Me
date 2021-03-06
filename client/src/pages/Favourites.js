import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {useHistory} from 'react-router-dom';
import {ADD_TO_FAVOURITES, GET_FAVOURITES, REMOVE_FAVOURITES} from '../service/schema'
import Loading from '../components/Loading'
import * as bulmaToast from "bulma-toast";
import Empty from '../components/Empty'


function Favourites() {
    const {loading,error,data} = useQuery(GET_FAVOURITES)

    const history = useHistory()
    if(error){
        bulmaToast.toast({
            message: "Error!",
            type: "is-danger",
            position: "top-center",
            closeOnClick: true,
            pauseOnHover: true,
            opacity: 0.8,
        });
    }
    else if(loading){
        return <Loading/>
    }
    else if(data.favourites.length < 1){
        return <Empty/>
    }
    else if(data){
    return(
        <div>
                        <br/>
            <br/>

            <div className="card-container">
                {
                    data.favourites.map((movie, idx)=> {
                        return (
                        <div className="card menu-card" key={idx}>
                            <div className="card-image">
                                <figure className="image is-3by4">  
                                    <img src={movie.poster_path} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">{movie.title}</p>
                                        <div className="rating_container"> 
                                            {}
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="button-container">
            
                                        <button 
                                        className="button is-rounded is-small"
                                        onClick={()=>{
                                            if(movie.type == 'movie'){
                                                history.push(`/movies/${movie._id}`, { movie: data })
                                            }
                                            else if(movie.type == 'tv'){
                                                history.push(`/tv/${movie._id}`, { movie: data })
                                            }

                                        }}
                                        >Details</button>
                                    </div>
                                </div>
                            </div>
                            <br/>
                        </div>  
                    )})
                }
            </div>
        </div>
    )}
}
export default Favourites;