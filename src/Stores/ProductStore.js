import {observable, action} from "mobx";
import axios from "axios";

class ProductStore{
    static __instance = null;

    static getInstance(){
        if(ProductStore.__instance === null){
            ProductStore.__instance = new ProductStore();
        }
        return ProductStore.__instance;
    }

    constructor(){
        ProductStore.__instance = this;
    }

    @observable categoryItems = null;
    @action fetchCategoryItems = async (categoryId) => {
        try{
            this.categoryItems = null;
            let response = await axios({
                url : `http://localhost:8080/product/category/${categoryId}`,
                method : "get",
                headers : {
                    'Content-type' : 'application/json;charset=UTF-8'
                },
                timeout : 3000
            });
            if(response.status === 200){
                this.categoryItems = response.data;
                console.log(this.categoryItems);
            }
        }catch (ex) {
            console.log(ex);
        }
    }

    @observable subItems = null;
    @action fetchSubItems = async (subId) => {
        try{
            this.subItems = null;
            let response = await axios({
                url : `http://localhost:8080/product/subcategory/${subId}`,
                method : "get",
                headers : {
                    'Content-type' : 'application/json;charset=UTF-8'
                },
                timeout : 3000
            });
            if(response.status === 200){
                this.subItems = response.data;
            }
        }catch (ex) {
            console.log(ex);
        }
    }
}

export default ProductStore.getInstance();