import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Wishlist = () => {

    const wishlist = useSelector((state) => state.products.wishList);
    console.log('Wishlists > ', wishlist)


    return (
        <div>
                    <div className="modal-cart">
            <h6 className="text-left">You Wishlist ({wishlist.length})</h6>

            {/* cart item  */}

            <div className="full-cart">
            {
                wishlist.map(wish=>{
                    return(
                        <Row className="m-0 border-bottom">

                {/* cart item img  */}

                <Col lg={4} md={4} sm={4} xs={4}>
                    <img src={wish.img} alt={wish.name} className="img-responsive w-100"/>
                </Col>

                {/* cart item text  */}

                <Col lg={8} md={8} sm={8} xs={8} className="row m-0 p-0">
                    <Row className="m-0 p-0">
                        <Col lg={12} md={12} sm={12} xs={12} className="m-0 p-0">
                            <p className="m-0 p-0">{wish.name}</p>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0">
                        <Col lg={12} md={12} sm={12} xs={12}  className="d-flex justify-content-between align-items-center m-0 px-2 py-0">
                        <p className="fw-semibold m-0">${wish.price}</p>

                            {/* qunatity inc dec  */}

                        <button className="text-decoration-underline d-inline bg-transparent border-0 p-0 m-0">REMOVE</button>
                        
                        
                        </Col>
                    </Row>
                </Col>
            </Row>
                    );
                })
            }


            {/* <div className="my-3 checkout-cart">
                <p className="d-flex justify-content-between align-items-center mx-0 px-2 my-2"><span className="total">Total:</span> <span>$60</span></p>
                <Button variant="outline-dark" className="d-block mx-auto">PROCEED TO CHECKOUT</Button>
            </div> */}

            </div>

        </div>
        </div>
    );
};

export default Wishlist;