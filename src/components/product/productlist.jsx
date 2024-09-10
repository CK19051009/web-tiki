
import { onValue, ref } from "firebase/database";
import { ProductItem } from "./productitem";
import { dataFirebase } from "../../firebaseConfig";



export const ProductLit = () => {
  
    return (

        <>
            <div className="grid grid-cols-5 gap-[8px] " >
                <ProductItem />
                
                
            </div> 
        </>
    );
}