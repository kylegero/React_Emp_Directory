import axios from "axios";

export const getEmps = function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
};