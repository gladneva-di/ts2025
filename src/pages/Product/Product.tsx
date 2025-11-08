import { useLoaderData} from 'react-router-dom'
import type { Product } from '../../interfaces/product.interface';

export function Product() {

    // const { id } = useParams();
    const data = useLoaderData() as Product;
        //   throw new Error('sdfg');

    return <>Product - {data.name}</>
}