import axios from 'axios'

const BASE_URL = 'http://localhost:8888/lpdev2021/public/index.php/api/fournisseurs'

async function getFournisseurs()
{
    return await axios.get(BASE_URL);
}

async function getFournisseur(id)
{
  return await axios.get(BASE_URL+'/'+id);
}

async function postFournisseur(data)
{
  return await axios.post(BASE_URL, data);
}

async function putFournisseur(id, data)
{
  return await axios.put(BASE_URL+'/'+id, data);
}

export {getFournisseurs, getFournisseur, postFournisseur, putFournisseur}
