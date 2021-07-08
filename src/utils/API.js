import axios from "axios";

const API = "https://randomuser.me/api/?results=30&nat=us"

export default {
    getEmployees: () => {
        return axios.get(API);
    }
}