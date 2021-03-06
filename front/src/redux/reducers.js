/* eslint-disable array-callback-return */
/* eslint-disable default-case */
import {
     GET_COUNTRIES, 
     FILTER_COUNTRIES_BY_REGION,
     FILTER_CREATED,
     GET_ACTIVITY, 
     POST_ACTIVITY,
     GET_COUNTRIES_NAME,
     ORDER_BY_COUNTRY,
     ORDER_BY_COUNTRY_POPULATION, 
     DETAIL_COUNTRY

} from './acciones.js';

 const inicialState = {
    countries : [],
    allCountries : [],
    activities: [],
    detail: [], 
    orderCountries: []
 };
 const reducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }; 

            case FILTER_COUNTRIES_BY_REGION:
                const allCountries = state.allCountries
                const regionFilter = action.payload === "region" ? allCountries : allCountries.filter(el => el.region === action.payload)
                return {
                    ...state,
                    countries : regionFilter
            }

            case GET_ACTIVITY:
                return {
                    ...state,
                    activities: action.payload,
                }; 

            case FILTER_CREATED : 
            return {
                ...state,
                countries: state.allCountries.filter( c => c.activities.some(el => 
                    el.name === action.payload))
            }
          
            case GET_COUNTRIES_NAME: 
                return {
                    ...state,
                    countries: action.payload
                }

            case ORDER_BY_COUNTRY:
                let sortarray = action.payload === "asc" ?
                state.countries.sort(function (a,b){
                    if(a.name > b.name){
                        return 1
                    }
                    if(a.name < b.name){
                        return -1
                    }
                    if(a.name === b.name){
                        return 0
                    }
                }): 
                state.countries.sort(function (a,b){
                    if(a.name < b.name){
                        return 1
                    }
                    if(a.name > b.name){
                        return -1
                    }
                    if(a.name === b.name){
                        return 0
                    }
                })

                return{
                    ...state, 
                    orderCountries: sortarray
                }

                case ORDER_BY_COUNTRY_POPULATION:
                    let sortarrayp = action.payload === "population_asc" ?
                    state.countries.sort(function (a,b){
                        if(a.population < b.population){
                            return 1
                        }
                        if(a.population > b.population){
                            return -1
                        }
                        if(a.population === b.population){
                            return 0
                        }
                    }): 
                    state.countries.sort(function (a,b){
                        if(a.population > b.population){
                            return 1
                        }
                        if(a.population < b.population){
                            return -1
                        }
                        if(a.population === b.population){
                            return 0
                        }
                    })
    
                    return{
                        ...state, 
                        orderCountries: sortarrayp
                    }

            case POST_ACTIVITY: 
            return {
                ...state
            }

            case DETAIL_COUNTRY: 
            return{
                ...state,
                countries: action.payload,
                detail: action.payload
            }

       default: return state 
    }
    
}


export default reducer; 
