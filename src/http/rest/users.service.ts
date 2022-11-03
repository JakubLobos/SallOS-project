import get from "../http.service";

const getUsersRequest = () => {
    console.log("API done"); 
    return get("https://jsonplaceholder.typicode.com/users");
};

export default getUsersRequest;