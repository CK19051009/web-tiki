const fetchApi = async (url) =>{

    const response = await fetch(url);
    if(!response.ok){
        console.log("connect error")
    }
    const data = await response.json();
    return data


}
export default fetchApi