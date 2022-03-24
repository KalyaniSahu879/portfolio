import './product.css';

const Product = ({img,link,title , desc,tech}) =>{
    return (
        <div className='p'>
           <div className="p-browser">
               <div className="p-circle"></div>
               <div className="p-circle"></div>
               <div className="p-circle"></div>

           </div>
           <a href={link} target="_blank" rel="noreferrer">
               <img src={img} alt="" className='p-img'/>
           </a>
           <h1 className='p-title'>{title}</h1>
           <p className='p-desc'>{desc}</p>
           <div className='demo-div'>
           <a href={link} target="_blank" rel="noreferrer">
           <button>Demo</button>
               </a>
            <h5>{tech}</h5>
           </div>
        </div>
    )
}
export default Product