import axios from "axios";

const getEmployees = () => {
    return axios.get("https://randomuser.me/api/?results=50&nat=us")
    
};

export default getEmployees();