import { useDispatch } from 'react-redux'
import { update } from '../../redux/Slice/ProductSlice'
import * as ProductService from '../../service/ProductService'



// async function getData() {
//     const dispash = useDispatch()
//     const res = await ProductService.getProductApi.getAllProduct()
//     dispash(update(res.data))
// }