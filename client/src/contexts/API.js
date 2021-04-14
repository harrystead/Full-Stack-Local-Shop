import axios from "axios";

export default {
    getItems: function() {
        return axios.get("/items/")
    },
    itemsUser: function(currentUser){
        return axios.get(`/items/${currentUser.uid}`)
    },
    detailsUser: function(currentUser){
        return axios.get(`/details/${currentUser.uid}`)
    },
    deleteItem: function(id){
        return axios.delete(`/items/${id}`)
    },
    // getById: function(id){
    //     return axios.get(`/items/${id}/`)
    // }
    getBasket: function(){
        return axios.get("/basket/")
    },
    postBasket: function(basketData){
        return axios.post("/basket/add/", basketData)
    },
    basketDetele: function(id){
        return axios.delete(`/basket/${id}`)
    }
}