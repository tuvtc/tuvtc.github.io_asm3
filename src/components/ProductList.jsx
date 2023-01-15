import React from "react";
import './ProductList.css'
import { api } from "../api/api";
import List from './List'
import { useNavigate } from "react-router-dom";


const CATEGORY = {
    ALL: '',
    IPHONE: 'iphone',
    IPAD: 'ipad',
    MACBOOK: 'macbook',
    AIRPOD: 'airpod',
    WATCH: 'watch',
    MOUSE: 'mouse',
    KEYBOARD: 'keyboard',
    OTHER: 'other'
}

function ProductList() {
    const [category, setCategory] = React.useState(CATEGORY.ALL)
    const [products, setProducts] = React.useState([]);

    const navigate = useNavigate()

    async function getProducts() {
      try {
        const response = await api.fetchProductList();
        setProducts(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
  
    React.useEffect(() => {
      getProducts();
    }, []);

    const onChangeCategory = (newCategory) => {
        if (category !== newCategory) {
            setCategory(newCategory)
        }
    }

    const onItemClick = (product) => {
        navigate(`/detail/${product._id.$oid}`)
    }

    let filtedProducts = products.filter(product => {
            return (product.category === category || !category)
    })

    return (
        <div className='d-flex gap-5'>
            <div className="product-sidebar">
                <p className='p-2 text-uppercase'>Categories</p>
                <p className='text-uppercase bg-black text-white px-4 py-2'>Apple</p>
                <p onClick={() => onChangeCategory(CATEGORY.ALL)} className={`product-category px-4 py-2 ${category === CATEGORY.ALL ? 'active' : ''}`}>All</p>
                <p className='text-uppercase px-4 py-2 bg-light fw-bold'>Iphone & mac</p>
                <p onClick={() => onChangeCategory(CATEGORY.IPHONE)} className={`product-category px-4 py-2 ${category === CATEGORY.IPHONE ? 'active' : ''}`}>iPhone</p>
                <p onClick={() => onChangeCategory(CATEGORY.IPAD)} className={`product-category px-4 py-2 ${category === CATEGORY.IPAD ? 'active' : ''}`}>Ipad</p>
                <p onClick={() => onChangeCategory(CATEGORY.MACBOOK)} className={`product-category px-4 py-2 ${category === CATEGORY.MACBOOK ? 'active' : ''}`}>Macbook</p>
                <p className='text-uppercase px-4 py-2 bg-light fw-bold'>Wireless</p>
                <p onClick={() => onChangeCategory(CATEGORY.AIRPOD)} className={`product-category px-4 py-2 ${category === CATEGORY.AIRPOD ? 'active' : ''}`}>Airpod</p>
                <p onClick={() => onChangeCategory(CATEGORY.WATCH)} className={`product-category px-4 py-2 ${category === CATEGORY.WATCH ? 'active' : ''}`}>Watch</p>
                <p className='text-uppercase px-4 py-2 bg-light fw-bold'>Other</p>
                <p onClick={() => onChangeCategory(CATEGORY.MOUSE)} className={`product-category px-4 py-2 ${category === CATEGORY.MOUSE ? 'active' : ''}`}>Mouse</p>
                <p onClick={() => onChangeCategory(CATEGORY.KEYBOARD)} className={`product-category px-4 py-2 ${category === CATEGORY.KEYBOARD ? 'active' : ''}`}>Keyboard</p>
                <p onClick={() => onChangeCategory(CATEGORY.OTHER)} className={`product-category px-4 py-2 ${category === CATEGORY.OTHER ? 'active' : ''}`}>Other</p>
            </div>
            <div className="product-shop">
                <div className="d-flex align-items-center justify-content-between">
                    <input type="text" className="form-control" placeholder="Enter Search Here!" />
                    <select className="form-select form-select-sm">
                        <option defaultValue>Default sorting</option>
                    </select>
                </div>
                <div>
                    <List products={filtedProducts} isShowHeader={false} itemOnRow={3} onItemClick={onItemClick} />
                </div>
                <div className="d-flex justify-content-end">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                        <p>Showing 1-{filtedProducts.length} of {filtedProducts.length} results</p>
                    </nav>
                </div>

            </div>
        </div>
    )
}

export default ProductList
