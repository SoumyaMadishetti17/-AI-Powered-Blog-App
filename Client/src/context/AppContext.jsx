// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import {useNavigate} from "react-router-dom";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//     const navigate = useNavigate();

//     // Admin auth
//     const [token, setToken] = useState(null);

//      // User auth
//      const [userToken, setUserToken] = useState(null);
//      const [user, setUser] = useState(null);

//     const [blogs, setBlogs] = useState([]);
//     const [input, setInput] = useState("");

//     const fetchBlogs= async () => {
//         try {
//             const {data}= await axios.get("/api/blog/all");
//             data.success? setBlogs(data.blogs): toast.error(data.message)
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }

//     useEffect(()=>{
//         fetchBlogs();
//         const token = localStorage.getItem("token");
//         if (token) {
//             setToken(token);
//             axios.defaults.headers.common['Authorization'] = `${token}`

//         }        
//     },[])

//     const value={
//         axios, navigate , token, setToken, blogs, setBlogs, input, setInput
//     }
//     return (
//         <AppContext.Provider value={value}>
//             {children}
//         </AppContext.Provider>
//     )
// };

// export const useAppContext = () => {
//     return useContext(AppContext);
// }


// //
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const navigate = useNavigate();

    // Admin auth
    const [token, setToken] = useState(null);

    // User auth
    const [userToken, setUserToken] = useState(null);
    const [user, setUser] = useState(null);

    const [blogs, setBlogs] = useState([]);
    const [input, setInput] = useState("");

    const fetchBlogs = async () => {
        try {
            const { data } = await axios.get("/api/blog/all");
            data.success ? setBlogs(data.blogs) : toast.error(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        fetchBlogs();

        // Restore admin token
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
            axios.defaults.headers.common['Authorization'] = savedToken;
        }

        // Restore user token
        const savedUserToken = localStorage.getItem("userToken");
        const savedUser = localStorage.getItem("user");
        if (savedUserToken) {
            setUserToken(savedUserToken);
            setUser(savedUser ? JSON.parse(savedUser) : null);
            axios.defaults.headers.common['Authorization'] = savedUserToken;
        }
    }, []);

    const logoutUser = () => {
        setUserToken(null);
        setUser(null);
        localStorage.removeItem("userToken");
        localStorage.removeItem("user");
        delete axios.defaults.headers.common['Authorization'];
        toast.success("Logged out");
        navigate('/');
    };

    const logoutAdmin = () => {
        setToken(null);
        localStorage.removeItem("token");
        delete axios.defaults.headers.common['Authorization'];
        navigate('/');
    };

    const value = {
        axios, navigate,
        // admin
        token, setToken, logoutAdmin,
        // user
        userToken, setUserToken, user, setUser, logoutUser,
        // blogs
        blogs, setBlogs, input, setInput,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};