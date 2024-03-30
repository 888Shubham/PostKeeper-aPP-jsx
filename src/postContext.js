// create post context here
import { createContext, useContext, useState } from "react";

const postContext = createContext();
// Create custom hook that returns context value here
export function useValue(){
    const value = useContext(postContext);
    return value;
}

// create a custom saved post provider here with add and reset functions
export function CustomPostContex({children}){

    const [savedPosts, setSavedPosts] = useState([]);
    const [showSavedList, setShowSavedList] = useState(false);

    const Reset = () =>{
        setSavedPosts([]);
    }
    const save =(post)=>{
        setSavedPosts((prevState)=>  [post , ...prevState])
    }

    return(
        <postContext.Provider value ={{savedPosts, Reset,  save, setSavedPosts, setShowSavedList, showSavedList}}>
            {children}
        </postContext.Provider>
    )

}
