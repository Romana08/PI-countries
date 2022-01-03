import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES'; 
export const GET_COUNTRIES_NAME = 'GET_COUNTRIES_NAME'; 
export const DETAIL_COUNTRY ='DETAIL_COUNTRY ';
export const ORDER_BY_COUNTRY ='ORDER_BY_COUNTRY ';
export const GET_ACTIVITY = 'GET_ACTIVITY'; 
export const FILTER_COUNTRIES_BY_REGION= 'FILTER_COUNTRIES_BY_REGION'; 
export const FILTER_CREATED = 'FILTER_CREATED';
export const ORDER_BY_COUNTRY_POPULATION = 'ORDER_BY_COUNTRY_POPULATION';
export const POST_ACTIVITY = 'POST_ACTIVITY'

// FALTARIAN LAS DE LAS ACTIVIDADES 


//usando getcounries
export function getCountries() {
    return async function (dispatch){
        return axios.get('http://localhost:3001/countries')
        .then((response)=>{
            dispatch({ type: GET_COUNTRIES, payload: response.data})
        })
    }}
    //para el search
    export function getCountriesName(name) {
        return async function (dispatch){
            try {
            let json = await axios.get("http://localhost:3001/countries?name=" + name)
            dispatch ({
                type: GET_COUNTRIES_NAME, 
                payload: json.data
            })
             
        } catch (error) {
            console.log(error);
        }
        
    }}
    

    //no lo terminé de usar
    
    export function orderCountries(payload){
        return {
            type : ORDER_BY_COUNTRY, 
            payload
        }
    }
    export function orderByPopulation(payload){
        return{
            type: ORDER_BY_COUNTRY_POPULATION,
            payload
        }
    }

    //usando filter
    export function filterCountriesByRegion (payload){
        return {
            type: FILTER_COUNTRIES_BY_REGION,
            payload
        }
    }
    export function getActivities() {
        return async function (dispatch){
            return axios.get('http://localhost:3001/activity')
            .then((response)=>{
                dispatch({ type: GET_ACTIVITY, payload: response.data})
            })
        }}


    export function postActivity(payload){
        return async function (dispatch){
            const res =  await axios.post ('http://localhost:3001/activity', payload)
            dispatch({
                type: POST_ACTIVITY,
                payload: res.data
            })
            return res; 
        }
    }
        
    export function filterCreated(payload){
        return{
            type: FILTER_CREATED,
            payload 
        }
    }

    export function getCountriesDetail(id){
        return async function (dispatch){
        try {
        let json = await axios.get(`http://localhost:3001/countries/${id}`)
        return dispatch ({
            type: DETAIL_COUNTRY, 
            payload: json.data
        })
         
    } catch (error) {
        console.log(error);
    }
    
}}
    


