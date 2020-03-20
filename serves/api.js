const  axios = require('axios'); 

async function getFilmes(){
    const data  = await axios.get('https://leprechaum-scrappy.herokuapp.com/filmes#').then((e)=>{
        return e.data
    }).catch((err)=>{
        return err
    });

    return data
}


module.exports = {getFilmes}