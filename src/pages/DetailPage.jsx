import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api/api";
import List from "../components/List";
import Navbar from "../components/Navbar";
import "./DetailPage.css";
import { renderPrice } from "../helper/helper";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/cart";

function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch()

  const [product, setProduct] = React.useState(null);
  const [relatedProducts, setRelatedProducts] = React.useState([]);
//   Tang giam so luong
  const [num, setNum] = React.useState(1)

  const navigate = useNavigate();

//   Tang so luong
    const onIncreaseNum = () => {
        setNum(num + 1)
    }

//  Giam so luong
    const onDecreaseNum = () => {
        if(num > 1) {
            setNum(num - 1)
        } else {
            alert('Da min')
        }
    }

    const onAddToCart = () => {
      if (product) {
        const productWithQuantity = {
          ...product,
          quantity: num
        }
        dispatch(cartActions.ADD_CART(productWithQuantity))
      }
    }

  async function getProducts() {
    try {
      const response = await api.fetchProductList(id);
      // setProducts(response.data);

      // Find product by id
      // neu kiem thay
      const foundProduct = response.data.find(
        (product) => product._id.$oid === id
      );

      if (!foundProduct) {
        navigate(-1);
      } else {
        console.log(foundProduct);
        setProduct(foundProduct);
        const foundRelatedProducts = response.data.filter((product) => {
          return (
            product.category === foundProduct.category &&
            product._id.$oid !== foundProduct._id.$oid
          );
        });
        setRelatedProducts(foundRelatedProducts);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  React.useEffect(() => {
    getProducts();
  }, []);

  // product da co roi, tren store
  // phai call API, set State

  const {
    img1,
    img2,
    img3,
    img4,
    name,
    price,
    short_desc,
    category,
    long_desc,
  } = product || {};
  return (
    <div className="container py-5 gap-2">
      <Navbar />
      <div className="d-flex gap-2">
        <div className="d-flex flex-column">
          <div className="side-img">
            <img src={img2} />
          </div>
          <div className="side-img">
            <img src={img3} />
          </div>
          <div className="side-img">
            <img src={img4} />
          </div>
          <div className="side-img">
            <img src={img1} />
          </div>
        </div>
        <div className="detail-img">
          <img src={img1} />
        </div>
        <div className="fst-italic">
          <p className="fs-2 fw-semibold">{name}</p>
          <p className="fs-4 fw-light">{renderPrice(price)} VND</p>
          <p>{short_desc}</p>
          <p>
            <span className="fw-semibold">CATEGORY: </span>
            {category}
          </p>
          <div>
            <div className="d-flex w-30">
              <div className="d-flex gap-2 p-2 quantity-style">
                <span className='pe-4 text-uppercase'>Quantity</span>
                <div onClick={onDecreaseNum}>
                    <ChevronLeft size={20} color={"black"} />
                </div>
                <span>{num}</span>
                <div onClick={onIncreaseNum}>
                    <ChevronRight size={20} color={"black"} />
                </div>
              </div>
              <button onClick={onAddToCart} className="bg-black text-white">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4 fst-italic'>
        <p className='border bg-black text-white text-uppercase p-3 d-inline-block'>Description</p>
        <p className="text-uppercase py-2 fw-semibold fs-5">Product Description</p>
        <p style={{ whiteSpace: "pre-line" }}>{long_desc}</p>
      </div>
      <div className='fst-italic p-4'>
        <p className='fw-semibold fs-5 text-uppercase'>Related Product</p>
        <List products={relatedProducts} itemOnRow={5} isShowHeader={false} />
      </div>
    </div>
  );
}

export default DetailPage;
