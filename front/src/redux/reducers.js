/* eslint-disable default-case */
import {
     GET_COUNTRIES, 
     FILTER_COUNTRIES_BY_REGION,
     FILTER_CREATED,
     GET_ACTIVITY, 
     POST_ACTIVITY,
     GET_COUNTRIES_NAME,
     DETAIL_COUNTRY

} from './acciones.js';

 const inicialState = {
    countries : [],
    allCountries : [],
    activities: [],
    allActivities: [],
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
            const allActivities = state.allActivities
            // const createdFilter = action.payload === "name" ? allActivities.filter( el => el.createInDb) :  allActivities.filter(el => !el.createInDb) 
            const createdFilter = action.payload === 'name' ? allActivities.filter( el => el.name) :  allActivities.filter(el => !el.name) 
            return {
                ...state,
                activities: action.payload === "All" ? state.allActivities : createdFilter          
            }
          
            case GET_COUNTRIES_NAME: 
                return {
                    ...state,
                    countries: action.payload
                }

            case POST_ACTIVITY: 
            return {
                ...state
            }
            case DETAIL_COUNTRY: 
            return{
                ...state,
                detail: action.payload
            }

       default: return state 
    }
    
}


export default reducer; 
