//For models we use upper case to name the files
//export default 'I am an exporrted string'
import axios from 'axios';
import{key, proxy} from '../config';

export default class Search {

    constructor(query){
        this.query = query;
    }

    async getResults(){
        
        // https://www.food2fork.com/api/search
        // d11d2f2dd2468ce2ca1c4769716666f5 
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}




    


