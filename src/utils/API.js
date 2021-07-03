import axios from "axios";

const getUsers = () => {
    return axios.get("https://randomuser.me/api/")
};

export default getUsers();