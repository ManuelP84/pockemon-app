import { createAsyncThunk } from "@reduxjs/toolkit";
import { pockeType } from "../state/slices/pockemonSlice";

// Pokemons ENDPOINT
const PATH = 'https://pokeapi.co/api/v2/'

// Response Type
interface IResponseType {
    name: string
    url: string
}

const getPoke =  async (list: IResponseType) => {
    const response = await fetch(list.url)
    const data = await response.json()
    const pokemon: pockeType = {
        id: data.id,
        name: data.name,
        sprite: data.sprites.other['official-artwork'].front_default,
        weight: data.weight,
        isFavorite: false,
    }
    return pokemon
}

export const getPokemons = createAsyncThunk('getPockemons', async(limit: number = 50) => {
    const response = await fetch(`${PATH}pokemon/?limit=${limit}`)
    const data = await response.json()
    const responseList = data.results as IResponseType[]
    const result: pockeType[] = []

    for(const item of responseList){
        const pokemon = await getPoke(item)
        result.push(pokemon)
    }
    return result
})