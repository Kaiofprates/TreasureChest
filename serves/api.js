const  axios = require('axios'); 

async function getFilmes(){
    const data  = await axios.post('https://leprechaum-scrappy.herokuapp.com/filmes',{
        "url" : "http://www.megatorrentshd.org/?s="
    }).then((e)=>{
        return e.data
    }).catch((err)=>{
        return err
    });

    return data
}


module.exports = {getFilmes}