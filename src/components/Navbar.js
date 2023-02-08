import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const styleLength = {
  position: "fixed",
  right: "1%",
  top: "1%",
  width: "27px",
  height: "27px",
  borderRadius: "50%",
  backgroundColor: "red",
  fontSize: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
};

const i = {
  fontSize: "1.5vw",
};

export default function Navbar() {
  const cartData = useSelector((data) => data.cartItems);
  // const [sum, setSum] = useState(0);
  // console.log(cartData);
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top pe-4 px-4">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center gap-2" href="/">
          <BsFillBagFill />
          Shooping Mall
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <i style={i} className="ri-shopping-cart-2-fill">
            Cart
          </i>
          <span style={styleLength}>{cartData.length}</span>
        </button>

        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header mb-2">
            <h2 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Added Items ....💀
            </h2>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="container-fluid overflow-auto ">
            {/* <div className="card mb-3" style="max-width: 540px;"> */}
            {cartData.map((element, index) => {
              return (
                <div
                  key={index}
                  className="row g-0 mt-2 border border-subtitle-white"
                >
                  <div className="col-md-3">
                    <img
                      src={element.image}
                      className="img-fluid rounded-start"
                      style={{ height: "130px", width: "120px" }}
                      alt="imagae lagi h bhaii"
                    />
                  </div>
                  <div className="col-md-8 text-start mx-2">
                    <div className="card-body">
                      <h5 className="card-title">
                        {element.title.substring(0, 20)}
                      </h5>
                      <p className="card-text">
                        {element.description.substring(0, 40) + "...."}
                      </p>
                      <h3>$ {element.price}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
}
