

export const getData = async() =>{
    try{
        const url = "https://jsonplaceholder.typicode.com/todos";
        const resp = await fetch(url);
        const respJson = resp.json();
        return respJson;
    }
    catch(error){
        console.log("No se Puede mostrar la pagina"+ error);
    }
}