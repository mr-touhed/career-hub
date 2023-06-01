const getStore = () => {
   const storeData =  localStorage.getItem('apply-jobs');
   return JSON.parse(storeData)
}

const addToStore = (id) => {
    let storeCart = [];
    const getItems = getStore();
    
    if(getItems){
        storeCart = getItems;

        
    }
        if(!storeCart.includes(id)){
            storeCart.push(id)
            
        }
    
    
    localStorage.setItem('apply-jobs',JSON.stringify(storeCart))
    console.log(storeCart);
}

export {addToStore,getStore}