import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {GET_TVS} from '../service/schema';
import {useHistory} from 'react-router-dom';
import Loading from '../components/Loading'


function TV() {
    const history = useHistory()

    const {loading,error,data} = useQuery(GET_TVS);
    if(error){
        return <p>error</p>
    }
    else if(loading){
        return <Loading/>
    }
    else if(data){
    return(
        <div>
            <div className="card-container">
                {
                    data.tvs.map((tv, idx)=> {
                        return (
                        <div className="card menu-card" key={idx}>
                            <div className="card-image">
                                <figure className="image is-3by4">  
                                    <img src={tv.poster_path} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">{tv.title}</p>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="button-container">
                                        <button 
                                        className="button is-rounded is-small"
                                        onClick={()=>{
                                            history.push(`/tv/${tv._id}`)
                                        }}
                                        >
                                            Details
                                        </button>
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
export default TV;