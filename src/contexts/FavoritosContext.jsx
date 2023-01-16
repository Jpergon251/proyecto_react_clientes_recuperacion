import { createContext, useContext, useState } from "react";

const FavoritosContext = createContext();

const FavoritosProvider = ({ children }) => {
    const [favoritos, setFavoritos] = useState([])
    
    
}

export default FavoritosProvider;
