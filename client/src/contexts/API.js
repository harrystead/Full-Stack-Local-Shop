import axios from "axios";

export default {
  getItems: function () {
    return axios.get("/items/");
  },
  itemsUser: function (currentUser) {
    return axios.get(`/items/${currentUser.uid}`);
  },
  detailsUser: function (currentUser) {
    return axios.get(`/details/${currentUser.uid}`);
  },
  deleteItem: function (id) {
    return axios.delete(`/items/${id}`);
  },
  updateItem: function (id, bidData, bidder) {
    return axios.put(`/items/${id}`, bidData, bidder);
  },
  updateTime: function (id, finalBid) {
    return axios.put(`/items/updateTime/${id}`, finalBid);
  },
  getFinishedItem: function(id){
    return axios.get(`/items/listEnded/time/${id}`);
  }
};
