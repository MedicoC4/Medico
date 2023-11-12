import React , {createContext , useState} from "react";


const myContext = createContext()


const myProvider = ({children})=>{
    const [latitude, setlatitude] = useState(0)
  const [Longtituse, setLongtituse] = useState(0)

    return (
        <myContext.Provider value={{latitude, setlatitude , Longtituse , setLongtituse}}>
            {children}
        </myContext.Provider>
    )
}


export {myProvider , myContext}