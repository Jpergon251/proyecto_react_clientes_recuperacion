import { useEffect, useState } from "react"
import useForm from "../hook/useForm"
import PokemonContext from "./PokemonContext"


const PokemonProvider = ({children}) => {
    const [allPokemons, setAllPokemons] = useState([])
    const [globalPokemons, setGlobalPokemons ] = useState([])
    const [offset, setOffset] = useState(0)

    //Utilizar Customhook -useForm

    const {valueSearch, onInputChange, onResetForm} = useForm({
        valueSearch: '',
    })

    //Estados simples
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)

    //Llamamos a 50 pokemons

    const getAllPokemons = async(limit = 50) => {
        const baseURL = "https://pokeapi.co/api/v2"
        
        const res = await fetch(`${baseURL}/pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json();

        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json();
            return data
        })

        const results = await Promise.all(promises)

        setAllPokemons([...allPokemons,...results,]);
        setLoading(false)
    }
    
    // todos pokemons

    const getGlobalPokemons = async() => {
        const baseURL = "https://pokeapi.co/api/v2"
        
        const res = await fetch(`${baseURL}/pokemon?limit=100000&offset=0`)
        const data = await res.json();

        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json();
            return data
        })

        const results = await Promise.all(promises)

        setGlobalPokemons(results);
        setLoading(false)
    }

    //llamar a un pokemon por id

    const getPokemonByID = async(id) => {
        const baseURL = "https://pokeapi.co/api/v2"
        const res = await fetch(`${baseURL}/pokemon/${id}`)

        const data = await res.json();
        
        return data

    }

    useEffect(() => {
        getAllPokemons()
    }, [])

    useEffect(() => {
        getGlobalPokemons()
    }, [])

    return (
    <PokemonContext.Provider value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalPokemons,
        getPokemonByID
    }}>
        {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider