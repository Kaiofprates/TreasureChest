const axios = require('axios');

async function getFilmes() {
    const data = await axios.post('https://leprechaum-scrappy.herokuapp.com/filmes', {
        "url": "http://www.megatorrentshd.org/?s="
    }).then((e) => {
        return e.data
    }).catch((err) => {
        return err
    });
    return data
}

async function getInfo(url) {
    const data = await axios.post('https://leprechaum-scrappy.herokuapp.com/filmes/detalhes', {
        url
    }).then((e) => {
        return e.data
    }).catch((err) => {
        return err
    });
    return data
}


async function searchMovie(movie) {
    const data = await axios.post('https://leprechaum-scrappy.herokuapp.com/filmes', {
        url: `http://www.megatorrentshd.org/?s=${movie}`
    }).then((e) => {
        return e.data
    }).catch((err) => {
        return err
    });
    return data
}


async function downloadMovie(body) {
    const data = await axios.post('https://leprechaum-nestjs.herokuapp.com/torrents', body
    ).then((e) => {
        return e
    }).catch((err) => {
        return err
    });
    return data
}


async function getQuote() {
    const data = await axios.get('https://leprechaum-nestjs.herokuapp.com/')
        .then((e) => {
            return e
        }).catch((err) => {
            console.log(err)
        });
    return data
}



module.exports = {
    getFilmes,
    getInfo,
    searchMovie,
    downloadMovie,
    getQuote
}