import axios from 'axios'

const BASE_URL = 'http://localhost:8888/lpdev2021/public/index.php/api/articles'

async function getArticles()
{
    return await axios.get(BASE_URL);
}

async function getArticle(id)
{
  return await axios.get(BASE_URL+'/'+id);
}

async function postArticle(data)
{
  return await axios.post(BASE_URL, data);
}

export {getArticles, getArticle, postArticle}
