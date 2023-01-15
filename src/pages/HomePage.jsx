import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Category from "../components/Category";
import List from "../components/List";
import { api } from "../api/api";
import './HomePage.css'
import Popup from "../components/Popup";
import { useDispatch } from "react-redux";
import { productActions } from "../redux/product";

function HomePage() {
  const [products, setProducts] = React.useState([]);

  const dispatch = useDispatch()

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

  const onItemClick = (product) => {
    dispatch(productActions.SHOW_POPUP(product))
  }

  return (
    <div>
      <div className="container">
        <Navbar />
        <Banner />
        <Category />
        <List products={products} onItemClick={onItemClick} />
        <div className="d-flex justify-content-between bg-body-secondary px-4 py-5 fst-italic">
          <div>
            <h4 className='text-uppercase'>Free shipping</h4>
            <p>Free shipping worldwide</p>
          </div>
          <div>
            <h4 className='text-uppercase'>24 x 7 service</h4>
            <p>Free shipping worldwide</p>
          </div>
          <div>
            <h4 className='text-uppercase'>Festival offer</h4>
            <p>Free shipping worldwide</p>
          </div>
        </div>
        <div className='d-flex justify-content-between mt-5'>
          <div className='form-item fst-italic'>
            <h4 className='text-uppercase'>let's be friends!</h4>
            <p className='text-secondary-emphasis'>Nisi nisi tempor consequat laboris nisi.</p>
          </div>
          <div className="input-group mb-3 form-item">
            <input type="email" className="form-control" placeholder="Enter your email address" />
            <button className="btn btn-dark">Subscribe</button>
          </div>
        </div>
        <Popup />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
