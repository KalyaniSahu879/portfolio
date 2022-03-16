import './productList.css';
import Product from '../product/product';
import {products} from '../../data'
const ProductList = ()=>{
    return (
        <div className='pl'>
            <div className="pl-text">
                <h1 className='pl-title'>
                   My Projects
                </h1>
                <p className="pl-desc">
                I NEVER DREAMED ABOUT SUCCESS, I WORK FOR IT. I ENJOY CREATING NEW IDEAS, WORKING ON NEW CREATIVE PROJECTS.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item)=>(

                    <Product key={item.id} img = {item.img} link = {item.link} title={item.title} />
                )
                )}
                
                
            </div>
        </div>
    )
}
export default ProductList ;