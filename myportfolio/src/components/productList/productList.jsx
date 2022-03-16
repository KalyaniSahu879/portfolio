import './productList.css';
import { useContext } from 'react';
import Product from '../product/product';
import {products} from '../../data'
import { ThemeContext } from '../../context';
const ProductList = ()=>{

    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode ;
    return (
        <div className='pl'>
            <div className="pl-text">
                <h1 className='pl-title'>
                   My Projects
                </h1>
                <p className="pl-desc" style={{color:darkMode ?"white" : "#555"}}>
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