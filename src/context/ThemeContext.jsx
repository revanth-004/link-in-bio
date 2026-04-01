import {createContext,useContext, useEffect, useState} from "react";

const ThemeContext = createContext();

export function useTheme(){
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("use theme must be within a theme provider");
    }
    return context;
}

export function ThemeProvider ({children}){
    //typeof is used to check for server side or client side

    const [theme,setTheme] = useState(()=>{
        if(typeof window !== "undefined"){
            return localStorage.getItem("theme") || "light"
        }
        return "light"
    });
    
    useEffect(()=>{
        if(typeof window !== "undefined"){
            localStorage.setItem("theme",theme);

            const root = document.documentElement;
            root.classList.remove("light","dark")
        }
    })
}