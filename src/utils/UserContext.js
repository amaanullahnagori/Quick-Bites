import {createContext} from "react";

const UserContext = createContext({
    user : {
        name : "Amaan",
        email: "abc@gmail.com",
        },
    });

export default UserContext;