export default function Rest() {
    return (
        <>
            {/* OffCanvas Menu Start */}
            <div className="offcanvas-menu-wrapper" id="offcanvasMenu">
                <div className="offcanvas-menu-inner">
                    <a href="/#" className="btn-close">
                        <i className="la la-remove"></i>
                    </a>
                    <nav className="offcanvas-navigation">
                        <ul className="offcanvas-menu">
                            <li><a href="/#">Home</a></li>
                            <li><a href="/#">Shop</a></li>
                            <li><a href="/#">Product Details</a></li>
                        </ul>
                        <div className="site-info vertical">
                            <div className="site-info__item">
                                <a href="tel:+64212673659"><strong>+64 21 267 3659</strong></a>
                                <a href="mailto:cliu603@gmail.com">cliu603@gmail.com</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* OffCanvas Menu End */}

            {/* Mini Cart Start */}
            <aside className="mini-cart" id="miniCart">
                <div className="mini-cart-wrapper">
                    <div className="mini-cart__close">
                        <a href="/#" className="btn-close"><i className="la la-remove"></i></a>
                    </div>
                    <div className="mini-cart-inner">
                        <h3 className="mini-cart__heading mb--45">Shopping Cart</h3>
                        <div className="mini-cart__content">
                            <ul className="mini-cart__list">
                                <li className="mini-cart__product">
                                    <a href="/#" className="mini-cart__product-remove">
                                        <i className="la la-remove"></i>
                                    </a>
                                    <div className="mini-cart__product-image">
                                        <img src="assets/img/products/prod-01-100x100.jpg" alt="products" />
                                    </div>
                                    <div className="mini-cart__product-content">
                                        <a className="mini-cart__product-title" href="/#">Golden Easy Spot Chair.</a>
                                        <span className="mini-cart__product-quantity">1 x $49.00</span>
                                    </div>
                                </li>
                                <li className="mini-cart__product">
                                    <a href="/#" className="mini-cart__product-remove">
                                        <i className="la la-remove"></i>
                                    </a>
                                    <div className="mini-cart__product-image">
                                        <img src="assets/img/products/prod-02-100x100.jpg" alt="products" />
                                    </div>
                                    <div className="mini-cart__product-content">
                                        <a href="/#" className="mini-cart__product-title">Golden Easy Spot Chair.</a>
                                        <span className="mini-cart__product-quantity">1 x $49.00</span>
                                    </div>
                                </li>
                                <li className="mini-cart__product">
                                    <a href="/#" className="mini-cart__product-remove">
                                        <i className="la la-remove"></i>
                                    </a>
                                    <div className="mini-cart__product-image">
                                        <img src="assets/img/products/prod-03-100x100.jpg" alt="products" />
                                    </div>
                                    <div className="mini-cart__product-content">
                                        <a href="/#" className="mini-cart__product-title">Golden Easy Spot Chair.</a>
                                        <span className="mini-cart__product-quantity">1 x $49.00</span>
                                    </div>
                                </li>
                            </ul>
                            <div className="mini-cart__total">
                                <span>Subtotal</span>
                                <span className="ammount">$98.00</span>
                            </div>
                            <div className="mini-cart__buttons">
                                <a href="/#" className="btn btn-fullwidth btn-bg-primary mb--20">View Cart</a>
                                <a href="/#" className="btn btn-fullwidth btn-bg-primary">Checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            {/* Mini Cart End */}

            {/* Searchform Popup Start */}
            <div className="searchform__popup" id="searchForm">
                <a href="/#" className="btn-close"><i className="la la-remove"></i></a>
                <div className="searchform__body">
                    <p>Start typing and press Enter to search</p>
                    <form className="searchform">
                        <input type="text" name="popup-search" id="popup-search" className="searchform__input" placeholder="Search Entire Store..." />
                        <button type="submit" className="searchform__submit"><i className="la la-search"></i></button>
                    </form>
                </div>
            </div>
            {/* Searchform Popup End */}

            {/* Qicuk View Modal Start */}
            <div className="modal fade product-modal" id="productModal" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="la la-remove"></i></span>
                            </button>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="element-carousel slick-vertical-center"
                                        data-slick-options='{
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "arrows": true,
                            "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "la la-angle-double-left" },
                            "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "la la-angle-double-right" }
                        }'
                                    >
                                        <div className="product-image">
                                            <div className="product-image--holder">
                                                <a href="/#">
                                                    <img src="assets/img/products/prod-01.jpg" alt="Product" className="primary-image" />
                                                </a>
                                            </div>
                                            <span className="product-badge sale">sale</span>
                                        </div>
                                        <div className="product-image">
                                            <div className="product-image--holder">
                                                <a href="/#">
                                                    <img src="assets/img/products/prod-02.jpg" alt="Product" className="primary-image" />
                                                </a>
                                            </div>
                                            <span className="product-badge sale">sale</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="modal-box product-summary">
                                        <div className="product-navigation text-right mb--20">
                                            <a href="/#" className="prev"><i className="la la-angle-double-left"></i></a>
                                            <a href="/#" className="next"><i className="la la-angle-double-right"></i></a>
                                        </div>
                                        <div className="product-rating d-flex mb--20">
                                            <div className="star-rating star-three">
                                                <span>Rated <strong className="rating">5.00</strong> out of 5</span>
                                            </div>
                                        </div>
                                        <h3 className="product-title mb--20">Golden Easy Spot Chair.</h3>
                                        <p className="product-short-description mb--25">Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.</p>
                                        <div className="product-price-wrapper mb--25">
                                            <span className="money">$200.00</span>
                                            <span className="price-separator">-</span>
                                            <span className="money">$400.00</span>
                                        </div>
                                        <form action="#" className="variation-form mb--30">
                                            <div className="product-color-variations d-flex align-items-center mb--20">
                                                <p className="variation-label">Color:</p>
                                                <div className="product-color-variation variation-wrapper">
                                                    <div className="variation">
                                                        <a href="/#" className="product-color-variation-btn red selected" data-toggle="tooltip" data-placement="top" title="Red">
                                                            <span className="product-color-variation-label">Red</span>
                                                        </a>
                                                    </div>
                                                    <div className="variation">
                                                        <a href="/#" className="product-color-variation-btn black" data-toggle="tooltip" data-placement="top" title="Black">
                                                            <span className="product-color-variation-label">Black</span>
                                                        </a>
                                                    </div>
                                                    <div className="variation">
                                                        <a href="/#" className="product-color-variation-btn pink" data-toggle="tooltip" data-placement="top" title="Pink">
                                                            <span className="product-color-variation-label">Pink</span>
                                                        </a>
                                                    </div>
                                                    <div className="variation">
                                                        <a href="/#" className="product-color-variation-btn blue" data-toggle="tooltip" data-placement="top" title="Blue">
                                                            <span className="product-color-variation-label">Blue</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-size-variations d-flex align-items-center mb--15">
                                                <p className="variation-label">Size:</p>
                                                <div className="product-size-variation variation-wrapper">
                                                    <div className="variation">
                                                        <a href="/#" className="product-size-variation-btn selected" data-toggle="tooltip" data-placement="top" title="S">
                                                            <span className="product-size-variation-label">S</span>
                                                        </a>
                                                    </div>
                                                    <div className="variation">
                                                        <a href="/#" className="product-size-variation-btn" data-toggle="tooltip" data-placement="top" title="M">
                                                            <span className="product-size-variation-label">M</span>
                                                        </a>
                                                    </div>
                                                    <div className="variation">
                                                        <a href="/#" className="product-size-variation-btn" data-toggle="tooltip" data-placement="top" title="L">
                                                            <span className="product-size-variation-label">L</span>
                                                        </a>
                                                    </div>
                                                    <div className="variation">
                                                        <a href="/#" className="product-size-variation-btn" data-toggle="tooltip" data-placement="top" title="XL">
                                                            <span className="product-size-variation-label">XL</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="/#" className="reset_variations">Clear</a>
                                        </form>
                                        <div className="product-action d-flex flex-sm-row flex-column align-items-sm-center align-items-start mb--30">
                                            <div className="quantity-wrapper d-flex align-items-center mr--30 mr-xs--0 mb-xs--30">
                                                <label className="quantity-label" htmlFor="quick-qty">Quantity:</label>
                                                <div className="quantity">
                                                    <input type="number" className="quantity-input" name="qty" id="quick-qty" value="1" min="1" onChange={() => { }} />
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-size-sm btn-shape-square" onClick={() => window.location.href = '#'}>
                                                Add To Cart
                                                </button>
                                        </div>
                                        <div className="product-footer-meta">
                                            <p><span>Category:</span>
                                                <a href="/#">Full Sweater</a>,
                                                <a href="/#">SweatShirt</a>,
                                                <a href="/#">Jacket</a>,
                                                <a href="/#">Blazer</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Qicuk View Modal End */}
        </>
    );
}