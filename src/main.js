import axios from 'axios';

const fetchJoke = async () =>{
    try{
        const result = await axios.get('https://api.chucknorris.io/jokes/random');
        console.log(`De grap is: ${result.data.value}`);
    } catch (e) {
        console.log(e);
    }

}

fetchJoke();