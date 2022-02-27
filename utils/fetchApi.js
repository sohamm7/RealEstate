import axios from "axios";

export const baseUrl= 'https://bayut.p.rapidapi.com';

export const fetchApi = async(url) => {
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'ea0fd56567mshabac591b2e5cdefp137065jsn0d6f9c46adb2'
          },
    });

    return data;
}