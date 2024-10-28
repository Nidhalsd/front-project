import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./slices/userSlice"
import productSlice from "./slices/productSlice"
import panierSlice from "./slices/panierSlice"
import orderSlice from "./slices/orderSlice"


export default configureStore ({ reducer:{user:userSlice, products:productSlice,panier:panierSlice,order:orderSlice}})