const ProductDetails = () => {

    return (

        <div className="main-content-wrapper">
            <div className="page-content-inner pt--80 pt-md--60">
                <div className="container">
                    <div className="row no-gutters mb--80 mb-md--57">
                        <div className="col-lg-7 product-main-image">
                            <div className="product-image">
                                <div className="product-gallery vertical-slide-nav">
                                    <div className="product-gallery__large-image mb-sm--30">
                                        <div className="product-gallery__wrapper">
                                            <div className="element-carousel main-slider image-popup"
                                                data-slick-options='{
                                                "slidesToShow": 1,
                                                "slidesToScroll": 1,
                                                "infinite": true,
                                                "arrows": false,
                                                "asNavFor": ".nav-slider"
                                            }'>
                                                <figure className="product-gallery__image zoom">
                                                    <img src="assets/img/products/prod-01.png" alt="Product" />
                                                </figure>
                                                <figure className="product-gallery__image zoom">
                                                    <img src="assets/img/products/prod-01.png" alt="Product" />
                                                </figure>
                                                <figure className="product-gallery__image zoom">
                                                    <img src="assets/img/products/prod-01.png" alt="Product" />
                                                </figure>
                                                <figure className="product-gallery__image zoom">
                                                    <img src="assets/img/products/prod-01.png" alt="Product" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-gallery__nav-image">
                                        <div className="element-carousel nav-slider product-slide-nav slick-center-bottom"
                                            data-slick-options='{
                                            "spaceBetween": 10,
                                            "slidesToShow": 3,
                                            "slidesToScroll": 1,
                                            "vertical": true,
                                            "swipe": true,
                                            "verticalSwiping": true,
                                            "infinite": true,
                                            "focusOnSelect": true,
                                            "asNavFor": ".main-slider",
                                            "arrows": true,
                                            "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "la la-angle-up" },
                                            "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "la la-angle-down" }
                                        }'
                                            data-slick-responsive='[
                                            {
                                                "breakpoint":1200,
                                                "settings": {
                                                    "slidesToShow": 2
                                                }
                                            },
                                            {
                                                "breakpoint":992,
                                                "settings": {
                                                    "slidesToShow": 3
                                                }
                                            },
                                            {
                                                "breakpoint":767,
                                                "settings": {
                                                    "slidesToShow": 4,
                                                    "vertical": false
                                                }
                                            },
                                            {
                                                "breakpoint":575,
                                                "settings": {
                                                    "slidesToShow": 3,
                                                    "vertical": false
                                                }
                                            },
                                            {
                                                "breakpoint":480,
                                                "settings": {
                                                    "slidesToShow": 2,
                                                    "vertical": false
                                                }
                                            }
                                        ]'>
                                            <figure className="product-gallery__nav-image--single">
                                                <img src="assets/img/products/prod-01.png" alt="Products" />
                                            </figure>
                                            <figure className="product-gallery__nav-image--single">
                                                <img src="assets/img/products/prod-01.png" alt="Products" />
                                            </figure>
                                            <figure className="product-gallery__nav-image--single">
                                                <img src="assets/img/products/prod-01.png" alt="Products" />
                                            </figure>
                                            <figure className="product-gallery__nav-image--single">
                                                <img src="assets/img/products/prod-01.png" alt="Products" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 offset-xl-1 col-lg-5 product-main-details mt-md--50">
                            <div className="product-summary pl-lg--30 pl-md--0">
                                <div className="product-rating d-flex mb--20">
                                    <div className="star-rating star-four">
                                        <span>Rated <strong className="rating">5.00</strong> out of 5</span>
                                    </div>
                                </div>
                                <h3 className="product-title mb--20">Golden Easy Spot Chair.</h3>
                                <p className="product-short-description mb--20">Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.</p>
                                <div className="product-price-wrapper mb--25">
                                    <span className="money">$200.00</span>
                                    <span className="price-separator">-</span>
                                    <span className="money">$400.00</span>
                                </div>
                                <form action="#" className="variation-form mb--20">
                                    <div className="product-size-variations d-flex align-items-center mb--15">
                                        <p className="variation-label">Size:</p>
                                        <div className="product-size-variation variation-wrapper">
                                            <div className="variation">
                                                <a className="product-size-variation-btn selected" data-toggle="tooltip" data-placement="top" title="S">
                                                    <span className="product-size-variation-label">S</span>
                                                </a>
                                            </div>
                                            <div className="variation">
                                                <a className="product-size-variation-btn" data-toggle="tooltip" data-placement="top" title="M">
                                                    <span className="product-size-variation-label">M</span>
                                                </a>
                                            </div>
                                            <div className="variation">
                                                <a className="product-size-variation-btn" data-toggle="tooltip" data-placement="top" title="L">
                                                    <span className="product-size-variation-label">L</span>
                                                </a>
                                            </div>
                                            <div className="variation">
                                                <a className="product-size-variation-btn" data-toggle="tooltip" data-placement="top" title="XL">
                                                    <span className="product-size-variation-label">XL</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="product-action d-flex flex-sm-row align-items-sm-center flex-column align-items-start mb--30">
                                    <div className="quantity-wrapper d-flex align-items-center mr--30 mr-xs--0 mb-xs--30">
                                        <label className="quantity-label" htmlFor="qty">Quantity:</label>
                                        <div className="quantity">
                                            <input type="number" className="quantity-input" name="qty" id="qty" value="1" min="1" />
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-shape-square btn-size-sm" onClick={() => window.location.href = '#'}>
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="product-footer-meta">
                                    <p><span>Tabs:</span>
                                        <a>Full Sweater</a>,
                                        <a>SweatShirt</a>,
                                        <a>Jacket</a>,
                                        <a>Blazer</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mb--77 mb-md--57">
                        <div className="col-12">
                            <div className="tab-style-2">
                                <div className="nav nav-tabs mb--35 mb-sm--25" id="product-tab" role="tablist">
                                    <a className="nav-link active" id="nav-description-tab" data-toggle="tab" href="#nav-description" role="tab" aria-selected="true">
                                        <span>Information</span>
                                    </a>
                                    <a className="nav-link" id="nav-reviews-tab" data-toggle="tab" href="#nav-reviews" role="tab" aria-selected="true">
                                        <span>Reviews(1)</span>
                                    </a>
                                </div>
                                <div className="tab-content" id="product-tabContent">
                                    <div style={{ background: 'lightgray' }} className="tab-pane fade show active" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab">
                                        <div className="table-content table-responsive">
                                            <table className="table shop_attributes">
                                                <tbody>
                                                    <tr>
                                                        <th>Weight</th>
                                                        <td>57 kg</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Dimensions</th>
                                                        <td>160 × 152 × 110 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Color</th>
                                                        <td>
                                                            <a href="shop.html">Black</a>,
                                                            <a href="shop.html">Gray</a>,
                                                            <a href="shop.html">Red</a>,
                                                            <a href="shop.html">Violet</a>,
                                                            <a href="shop.html">Yellow</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="product-description">
                                            <p>Lorem ipsum dolor sit amet, consec do eiusmod tincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniaLo ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla paExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. iatis unde omnis iste natus error sit voluptatem accusantium </p>

                                            <p>Lorem ipsum dolor sit amet, consec do eiusmod tincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniaLo ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                                            <h5 className="product-description__heading">Characteristics :</h5>
                                            <ul>
                                                <li><i className="la la-arrow-right"></i><span>Rsit amet, consectetur adipisicing elit, sed do eiusmod tempor inc.</span></li>
                                                <li><i className="la la-arrow-right"></i><span>sunt in culpa qui officia deserunt mollit anim id est laborum. </span></li>
                                                <li><i className="la la-arrow-right"></i><span>Lorem ipsum dolor sit amet, consec do eiusmod tincididu. </span></li>
                                            </ul>

                                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: 30 }}>
                                                <img style={{ margin: 20 }} src="assets/img/details/Facebook Post – 1.jpg" />
                                                <img style={{ margin: 20 }} src="assets/img/details/Facebook Post – 5.jpg" />
                                                <img style={{ margin: 20 }} src="assets/img/details/Facebook Post – 8.jpg" />
                                                <img style={{ margin: 20 }} src="assets/img/details/Facebook Post – 2.jpg" />
                                                <img style={{ margin: 20 }} src="assets/img/details/Facebook Post – 3.jpg" />
                                                <img style={{ margin: 20 }} src="assets/img/details/Facebook Post – 4.jpg" />
                                                <img style={{ margin: 20 }} src="assets/img/details/Facebook Post – 7.jpg" />
                                                <img style={{ margin: 20 }} src="assets/img/details/Facebook Post – 6.jpg" />
                                            </div>


                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-reviews" role="tabpanel" aria-labelledby="nav-reviews-tab">
                                        <div className="product-reviews">
                                            <h3 className="review__title">1 review for Black Blazer</h3>
                                            <ul className="review__list">
                                                <li className="review__item">
                                                    <div className="review__container">
                                                        <img src="assets/img/others/comment-1.jpg" alt="Review Avatar" className="review__avatar" />
                                                        <div className="review__text">
                                                            <div className="d-flex flex-sm-row flex-column justify-content-between">
                                                                <div className="review__meta">
                                                                    <strong className="review__author">John Snow </strong>
                                                                    <span className="review__dash">-</span>
                                                                    <span className="review__published-date">November 20, 2018</span>
                                                                </div>
                                                                <div className="product-rating">
                                                                    <div className="star-rating star-five">
                                                                        <span>Rated <strong className="rating">5.00</strong> out of 5</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="review__description">Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="review-form-wrapper">
                                                <div className="row">
                                                    <div className="col-lg-8">
                                                        <span className="reply-title">Add a review</span>
                                                        <form action="#" className="form pr--30">
                                                            <div className="form-notes mb--20">
                                                                <p>Your email address will not be published. Required fields are marked <span className="required">*</span></p>
                                                            </div>
                                                            <div className="form__group mb--10 pb--1">
                                                                <label className="form__label d-block" >Your Ratings</label>
                                                                <div className="rating">
                                                                    <span><i className="la la-star"></i></span>
                                                                    <span><i className="la la-star"></i></span>
                                                                    <span><i className="la la-star"></i></span>
                                                                    <span><i className="la la-star"></i></span>
                                                                    <span><i className="la la-star"></i></span>
                                                                </div>
                                                            </div>
                                                            <div className="form__group mb--10">
                                                                <label className="form__label d-block" htmlFor="email">Your Review<span className="required">*</span></label>
                                                                <textarea name="review" id="review" className="form__input form__input--textarea"></textarea>
                                                            </div>
                                                            <div className="form__group mb--20">
                                                                <label className="form__label d-block" htmlFor="name">Name<span className="required">*</span></label>
                                                                <input type="text" name="name" id="name" className="form__input" />
                                                            </div>
                                                            <div className="form__group mb--20">
                                                                <label className="form__label d-block" htmlFor="email">Email<span className="required">*</span></label>
                                                                <input type="email" name="email" id="email" className="form__input" />
                                                            </div>
                                                            <div className="form__group">
                                                                <div className="form-row">
                                                                    <div className="col-12">
                                                                        <input type="submit" value="Submit Now" className="btn btn-size-md" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );

}
export default ProductDetails;