import {observable, action} from "mobx";
import axios from "axios";

class SubCategoryStore{
    static __instance = null;

    static getInstance(){
        if(SubCategoryStore.__instance === null){
            SubCategoryStore.__instance = new SubCategoryStore();
        }
        return SubCategoryStore.__instance;
    }

    constructor(){
        SubCategoryStore.__instance = this;
    }

    @observable items = null;
    @action getSubItems = async (categoryId) => {
        try{
            this.items = null;
            let response = await axios({
                url : `http://localhost:8080/subcategory/${categoryId}`,
                method : "get",
                headers : {
                    'Content-type' : 'application/json;charset=UTF-8'
                },
                timeout : 3000
            });

            if(response.status === 200){
                this.items = response.data;
                return true;
            }
            return false;
        }catch (ex) {
            console.log(ex);
            return false;
        }
    }
}

export default SubCategoryStore.getInstance();