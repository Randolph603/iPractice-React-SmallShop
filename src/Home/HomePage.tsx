import Rest from './Rest';

export default function HomePage() {


    return (
        <>
            {/* Preloader Start */}
            <div className="ft-preloader active">
                <div className="ft-preloader-inner h-100 d-flex align-items-center justify-content-center">
                    <div className="ft-child ft-bounce1"></div>
                    <div className="ft-child ft-bounce2"></div>
                    <div className="ft-child ft-bounce3"></div>
                </div>
            </div>
            {/* Preloader End */}

            {/* Main Wrapper Start */}
            <div className="wrapper">
                {/* Header Start */}
                <header className="header">
                    <div className="header__inner fixed-header">
                        <div className="header__main">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="header__main-inner">
                                            <div className="header__main-left">
                                                <div className="logo">
                                                    <a href="index.html" className="logo--normal">
                                                        <img src="assets/img/logo/logo.png" alt="Logo" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="header__main-center">
                                                <nav className="main-navigation text-center d-none d-lg-block">
                                                    <ul className="mainmenu">
                                                        <li className="mainmenu__item">
                                                            <a href="index.html" className="mainmenu__link">
                                                                <span className="mm-text">Home</span>
                                                            </a>
                                                        </li>
                                                        <li className="mainmenu__item">
                                                            <a href="shop.html" className="mainmenu__link">
                                                                <span className="mm-text">Shop</span>
                                                            </a>
                                                        </li>
                                                        <li className="mainmenu__item">
                                                            <a href="product-details.html" className="mainmenu__link">
                                                                <span className="mm-text">Product Details</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div className="header__main-right">
                                                <div className="header-toolbar-wrap">
                                                    <div className="header-toolbar">
                                                        <div className="header-toolbar__item header-toolbar--search-btn">
                                                            <a href="#searchForm" className="header-toolbar__btn toolbar-btn">
                                                                <i className="la la-search"></i>
                                                            </a>
                                                        </div>
                                                        <div className="header-toolbar__item header-toolbar--minicart-btn">
                                                            <a href="#miniCart" className="header-toolbar__btn toolbar-btn">
                                                                <i className="la la-shopping-cart"></i>
                                                                <span>01</span>
                                                            </a>
                                                        </div>
                                                        <div className="header-toolbar__item d-block d-lg-none">
                                                            <a href="#offcanvasMenu" className="header-toolbar__btn toolbar-btn menu-btn">
                                                                <div className="hamburger-icon">
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                </div>
                                                            </a>
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
                </header>
                {/* Header End */}

                {/* Main Content Wrapper Start */}
                <main className="main-content-wrapper">
                    {/* Slider area Start */}
                    <section className="homepage-slider mb--75 mb-md--55">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="element-carousel slick-right-bottom"
                                        data-slick-options='{
                                        "slidesToShow": 1,
                                        "arrows": true,
                                        "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "la la-arrow-left" },
                                        "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "la la-arrow-right" }
                                    }'
                                        data-slick-responsive='[{"breakpoint": 768, "settings": {"arrows": false}}]'>
                                        <div className="item">
                                            <div className="single-slide d-flex align-items-center bg-color" data-bg-color="#dbf3f2">
                                                <div className="row align-items-center no-gutters w-100">
                                                    <div className="col-xl-7 col-md-6 mb-sm--50">
                                                        <figure data-animation="fadeInUp" data-duration=".3s" data-delay=".3s" className="plr--15">
                                                            <img src="assets/img/slider/slider-01-img-01.png" alt="Slider O1 image" className="mx-auto" />
                                                        </figure>
                                                    </div>
                                                    <div className="col-md-6 col-lg-5 offset-lg-1 offset-xl-0">
                                                        <div className="slider-content">
                                                            <div className="slider-content__text mb--40 mb-md--30">
                                                                <p className="mb--15" data-animation="fadeInUp" data-duration=".3s" data-delay=".3s">#New Treand</p>
                                                                <p className="mb--20" data-animation="fadeInUp" data-duration=".3s" data-delay=".3s">Enlight your world. Make yourself more bright.</p>
                                                                <h1 className="heading__primary lh-pt7" data-animation="fadeInUp" data-duration=".3s" data-delay=".3s">Abotar Lighting</h1>
                                                            </div>
                                                            <div className="slider-content__btn">
                                                                <a href="#" className="btn btn-outline btn-brw-2" data-animation="fadeInUp" data-duration=".3s" data-delay=".6s">Shop Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="single-slide d-flex align-items-center bg-color" data-bg-color="#dbf3f2">
                                                <div className="row align-items-center no-gutters w-100">
                                                    <div className="col-xl-6 col-md-6 mb-sm--50 order-md-2">
                                                        <figure data-animation="fadeInUp" data-duration=".3s" data-delay=".3s" className="pl-15 pr--60">
                                                            <img src="assets/img/slider/slider-02-img-01.png" alt="Slider O1 image" className="mx-auto" />
                                                        </figure>
                                                    </div>
                                                    <div className="col-md-5 col-lg-5 offset-md-1 order-md-1">
                                                        <div className="slider-content">
                                                            <div className="slider-content__text border-color-2 mb--40 mb-md--30">
                                                                <p className="mb--15" data-animation="fadeInUp" data-duration=".3s" data-delay=".3s">#New Treand</p>
                                                                <p className="mb--20" data-animation="fadeInUp" data-duration=".3s" data-delay=".3s">Enlight your world. Make yourself more bright.</p>
                                                                <h1 className="heading__primary lh-pt7" data-animation="fadeInUp" data-duration=".3s" data-delay=".3s">Abotar Lighting</h1>
                                                            </div>
                                                            <div className="slider-content__btn">
                                                                <a href="#" className="btn btn-outline btn-brw-2 btn-brc-2" data-animation="fadeInUp" data-duration=".3s" data-delay=".6s">Shop Now</a>
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
                    </section>
                    {/* Slider area End */}

                    {/* Top Sale Area Start */}
                    <section className="top-sale-area mb--75 mb-md--55">
                        <div className="container">
                            <div className="row mb--35 mb-md--23">
                                <div className="col-12 text-center">
                                    <h2>This Week Top Sales</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="element-carousel"
                                        data-slick-options='{"spaceBetween": 30, "slidesToShow": 3}'
                                        data-slick-responsive='[
                                            {"breakpoint": 768, "settings": {"slidesToShow": 2}},
                                            {"breakpoint": 480, "settings": {"slidesToShow": 1}}
                                        ]'
                                    >
                                        <div className="item">
                                            <div className="ft-product">
                                                <div className="product-inner">
                                                    <div className="product-image">
                                                        <figure className="product-image--holder">
                                                            <img src="assets/img/products/prod-01.png" alt="Product" />
                                                        </figure>
                                                        <a href="product-details.html" className="product-overlay"></a>
                                                        <div className="product-action">
                                                            <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                <i className="la la-eye"></i>
                                                            </a>
                                                            <a href="#" className="action-btn">
                                                                <i className="la la-heart-o"></i>
                                                            </a>
                                                            {/* <a href="#" className="action-btn">
                                                                <i className="la la-repeat"></i>
                                                            </a> */}
                                                        </div>
                                                    </div>
                                                    <div className="product-info plr--20">
                                                        <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                        <div className="product-info-bottom">
                                                            <div className="product-price-wrapper">
                                                                <span className="money">$120 - $200</span>
                                                            </div>
                                                            {/* <a href="#" className="add-to-cart">
                                                                <i className="la la-plus"></i>
                                                                <span>Add To Cart</span>
                                                            </a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="ft-product">
                                                <div className="product-inner">
                                                    <div className="product-image">
                                                        <figure className="product-image--holder">
                                                            <img src="assets/img/products/prod-02.png" alt="Product" />
                                                        </figure>
                                                        <a href="product-details.html" className="product-overlay"></a>
                                                        <div className="product-action">
                                                            <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                <i className="la la-eye"></i>
                                                            </a>
                                                            <a href="#" className="action-btn">
                                                                <i className="la la-heart-o"></i>
                                                            </a>
                                                            {/* <a href="#" className="action-btn">
                                                                <i className="la la-repeat"></i>
                                                            </a> */}
                                                        </div>
                                                    </div>
                                                    <div className="product-info plr--20">
                                                        <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                        <div className="product-info-bottom">
                                                            <div className="product-price-wrapper">
                                                                <span className="money">$120 - $200</span>
                                                            </div>
                                                            {/* <a href="#" className="add-to-cart">
                                                                <i className="la la-plus"></i>
                                                                <span>Add To Cart</span>
                                                            </a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="ft-product">
                                                <div className="product-inner">
                                                    <div className="product-image">
                                                        <figure className="product-image--holder">
                                                            <img src="assets/img/products/prod-03.png" alt="Product" />
                                                        </figure>
                                                        <a href="product-details.html" className="product-overlay"></a>
                                                        <div className="product-action">
                                                            <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                <i className="la la-eye"></i>
                                                            </a>
                                                            <a href="#" className="action-btn">
                                                                <i className="la la-heart-o"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-info plr--20">
                                                        <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                        <div className="product-info-bottom">
                                                            <div className="product-price-wrapper">
                                                                <span className="money">$120 - $200</span>
                                                            </div>
                                                            {/* <a href="#" className="add-to-cart">
                                                                <i className="la la-plus"></i>
                                                                <span>Add To Cart</span>
                                                            </a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Top Sale Area End  */}

                    {/* Feature Product Area Start */}
                    <section className="feature-product-area mb--75 mb-md--55">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="feature-product bg-color" data-bg-color="#d7fbf9">
                                        <div className="feature-product__inner bg-color" data-bg-color="#e9fefd">
                                            <div className="feature-product__info">
                                                <p className="hastag">#New Style</p>
                                                <h2 className="feature-product__title"><a href="product-details.html">Luxry soft</a></h2>
                                                <a href="shop.html" className="feature-product__btn">Buy now</a>
                                            </div>
                                            <figure className="feature-product__image mb-sm--30">
                                                <a href="product-details.html">
                                                    <img src="assets/img/products/feature-product-01.png" alt="Feature Product" />
                                                </a>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Feature Product Area End  */}

                    {/* Product Tab Area Start */}
                    <section className="product-tab-area mb--30 mb-md--10">
                        <div className="container">
                            <div className="row mb--28 mb-md--18 mb-sm--33">
                                <div className="col-md-3 text-md-left text-center">
                                    <h2>All Products</h2>
                                </div>
                                <div className="col-md-9">
                                    <div className="tab-style-1">
                                        <div className="nav nav-tabs justify-content-md-end justify-content-center" id="product-tab" role="tablist">
                                            <a className="nav-item nav-link active" id="new-all-tab" data-toggle="tab" href="#new-all" role="tab" aria-controls="new-all" aria-selected="true">
                                                <span className="nav-text">All</span>
                                            </a>
                                            <a className="nav-item nav-link" id="new-wooden-tab" data-toggle="tab" href="#new-wooden" role="tab" aria-controls="new-wooden" aria-selected="false">
                                                <span className="nav-text">wooden</span>
                                            </a>
                                            <a className="nav-item nav-link" id="new-furnished-tab" data-toggle="tab" href="#new-furnished" role="tab" aria-controls="new-furnished" aria-selected="false">
                                                <span className="nav-text">furnished</span>
                                            </a>
                                            <a className="nav-item nav-link" id="new-table-tab" data-toggle="tab" href="#new-table" role="tab" aria-controls="new-table" aria-selected="false">
                                                <span className="nav-text">table</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="tab-content" id="product-tab-content">
                                        <div className="tab-pane fade show active" id="new-all" role="tabpanel" aria-labelledby="new-all-tab">
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-6 mb--45">
                                                    <div className="ft-product HTfadeInUp">
                                                        <div className="product-inner">
                                                            <div className="product-image">
                                                                <figure className="product-image--holder">
                                                                    <img src="assets/img/products/prod-04-270x300.jpg" alt="Product" />
                                                                </figure>
                                                                <a href="product-details.html" className="product-overlay"></a>
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                        <i className="la la-eye"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-heart-o"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-repeat"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-info">
                                                                <div className="product-category">
                                                                    <a href="product-details.html">Chair</a>
                                                                </div>
                                                                <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                                <div className="product-info-bottom">
                                                                    <div className="product-price-wrapper">
                                                                        <span className="money">$150</span>
                                                                    </div>
                                                                    <a href="#" className="add-to-cart pr--15">
                                                                        <i className="la la-plus"></i>
                                                                        <span>Add To Cart</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 mb--45">
                                                    <div className="ft-product HTfadeInUp">
                                                        <div className="product-inner">
                                                            <div className="product-image">
                                                                <figure className="product-image--holder">
                                                                    <img src="assets/img/products/prod-05-270x300.jpg" alt="Product" />
                                                                </figure>
                                                                <a href="product-details.html" className="product-overlay"></a>
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                        <i className="la la-eye"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-heart-o"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-repeat"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-info">
                                                                <div className="product-category">
                                                                    <a href="product-details.html">Chair</a>
                                                                </div>
                                                                <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                                <div className="product-info-bottom">
                                                                    <div className="product-price-wrapper">
                                                                        <span className="new-price">
                                                                            <span className="money">$150</span>
                                                                        </span>
                                                                        <span className="old-price">
                                                                            <span className="money">$200</span>
                                                                        </span>
                                                                    </div>
                                                                    <a href="#" className="add-to-cart pr--15">
                                                                        <i className="la la-plus"></i>
                                                                        <span>Add To Cart</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 mb--45">
                                                    <div className="ft-product HTfadeInUp">
                                                        <div className="product-inner">
                                                            <div className="product-image">
                                                                <figure className="product-image--holder">
                                                                    <img src="assets/img/products/prod-06-270x300.jpg" alt="Product" />
                                                                </figure>
                                                                <a href="product-details.html" className="product-overlay"></a>
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                        <i className="la la-eye"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-heart-o"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-repeat"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-info">
                                                                <div className="product-category">
                                                                    <a href="product-details.html">Chair</a>
                                                                </div>
                                                                <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                                <div className="product-info-bottom">
                                                                    <div className="product-price-wrapper">
                                                                        <span className="money">$150</span>
                                                                    </div>
                                                                    <a href="#" className="add-to-cart pr--15">
                                                                        <i className="la la-plus"></i>
                                                                        <span>Add To Cart</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 mb--45">
                                                    <div className="ft-product HTfadeInUp">
                                                        <div className="product-inner">
                                                            <div className="product-image">
                                                                <figure className="product-image--holder">
                                                                    <img src="assets/img/products/prod-09-270x300.png" alt="Product" />
                                                                </figure>
                                                                <a href="product-details.html" className="product-overlay"></a>
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                        <i className="la la-eye"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-heart-o"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-repeat"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-info">
                                                                <div className="product-category">
                                                                    <a href="product-details.html">Chair</a>
                                                                </div>
                                                                <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                                <div className="product-info-bottom">
                                                                    <div className="product-price-wrapper">
                                                                        <span className="money">$150</span>
                                                                    </div>
                                                                    <a href="#" className="add-to-cart pr--15">
                                                                        <i className="la la-plus"></i>
                                                                        <span>Add To Cart</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="new-wooden" role="tabpanel" aria-labelledby="new-wooden-tab">
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-6 mb--45">
                                                    <div className="ft-product HTfadeInUp">
                                                        <div className="product-inner">
                                                            <div className="product-image">
                                                                <figure className="product-image--holder">
                                                                    <img src="assets/img/products/prod-05-270x300.jpg" alt="Product" />
                                                                </figure>
                                                                <a href="product-details.html" className="product-overlay"></a>
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                        <i className="la la-eye"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-heart-o"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-repeat"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-info">
                                                                <div className="product-category">
                                                                    <a href="product-details.html">Chair</a>
                                                                </div>
                                                                <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                                <div className="product-info-bottom">
                                                                    <div className="product-price-wrapper">
                                                                        <span className="money">$150</span>
                                                                    </div>
                                                                    <a href="#" className="add-to-cart pr--15">
                                                                        <i className="la la-plus"></i>
                                                                        <span>Add To Cart</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 mb--45">
                                                    <div className="ft-product HTfadeInUp">
                                                        <div className="product-inner">
                                                            <div className="product-image">
                                                                <figure className="product-image--holder">
                                                                    <img src="assets/img/products/prod-01-270x300.jpg" alt="Product" />
                                                                </figure>
                                                                <a href="product-details.html" className="product-overlay"></a>
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                        <i className="la la-eye"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-heart-o"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-repeat"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-info">
                                                                <div className="product-category">
                                                                    <a href="product-details.html">Chair</a>
                                                                </div>
                                                                <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                                <div className="product-info-bottom">
                                                                    <div className="product-price-wrapper">
                                                                        <span className="money">$150</span>
                                                                    </div>
                                                                    <a href="#" className="add-to-cart pr--15">
                                                                        <i className="la la-plus"></i>
                                                                        <span>Add To Cart</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 mb--45">
                                                    <div className="ft-product HTfadeInUp">
                                                        <div className="product-inner">
                                                            <div className="product-image">
                                                                <figure className="product-image--holder">
                                                                    <img src="assets/img/products/prod-04-270x300.jpg" alt="Product" />
                                                                </figure>
                                                                <a href="product-details.html" className="product-overlay"></a>
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                        <i className="la la-eye"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-heart-o"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-repeat"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-info">
                                                                <div className="product-category">
                                                                    <a href="product-details.html">Chair</a>
                                                                </div>
                                                                <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                                <div className="product-info-bottom">
                                                                    <div className="product-price-wrapper">
                                                                        <span className="money">$150</span>
                                                                    </div>
                                                                    <a href="#" className="add-to-cart pr--15">
                                                                        <i className="la la-plus"></i>
                                                                        <span>Add To Cart</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 mb--45">
                                                    <div className="ft-product HTfadeInUp">
                                                        <div className="product-inner">
                                                            <div className="product-image">
                                                                <figure className="product-image--holder">
                                                                    <img src="assets/img/products/prod-06-270x300.jpg" alt="Product" />
                                                                </figure>
                                                                <a href="product-details.html" className="product-overlay"></a>
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                        <i className="la la-eye"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-heart-o"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-repeat"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-info">
                                                                <div className="product-category">
                                                                    <a href="product-details.html">Chair</a>
                                                                </div>
                                                                <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                                <div className="product-info-bottom">
                                                                    <div className="product-price-wrapper">
                                                                        <span className="money">$150</span>
                                                                    </div>
                                                                    <a href="#" className="add-to-cart pr--15">
                                                                        <i className="la la-plus"></i>
                                                                        <span>Add To Cart</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="new-furnished" role="tabpanel" aria-labelledby="new-furnished-tab">
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-6 mb--45">
                                                    <div className="ft-product HTfadeInUp">
                                                        <div className="product-inner">
                                                            <div className="product-image">
                                                                <figure className="product-image--holder">
                                                                    <img src="assets/img/products/prod-02-270x300.jpg" alt="Product" />
                                                                </figure>
                                                                <a href="product-details.html" className="product-overlay"></a>
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                        <i className="la la-eye"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-heart-o"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-repeat"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-info">
                                                                <div className="product-category">
                                                                    <a href="product-details.html">Chair</a>
                                                                </div>
                                                                <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                                <div className="product-info-bottom">
                                                                    <div className="product-price-wrapper">
                                                                        <span className="money">$150</span>
                                                                    </div>
                                                                    <a href="#" className="add-to-cart pr--15">
                                                                        <i className="la la-plus"></i>
                                                                        <span>Add To Cart</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 mb--45">
                                                    <div className="ft-product HTfadeInUp">
                                                        <div className="product-inner">
                                                            <div className="product-image">
                                                                <figure className="product-image--holder">
                                                                    <img src="assets/img/products/prod-01-270x300.jpg" alt="Product" />
                                                                </figure>
                                                                <a href="product-details.html" className="product-overlay"></a>
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                        <i className="la la-eye"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-heart-o"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-repeat"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-info">
                                                                <div className="product-category">
                                                                    <a href="product-details.html">Chair</a>
                                                                </div>
                                                                <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                                <div className="product-info-bottom">
                                                                    <div className="product-price-wrapper">
                                                                        <span className="money">$150</span>
                                                                    </div>
                                                                    <a href="#" className="add-to-cart pr--15">
                                                                        <i className="la la-plus"></i>
                                                                        <span>Add To Cart</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 mb--45">
                                                    <div className="ft-product HTfadeInUp">
                                                        <div className="product-inner">
                                                            <div className="product-image">
                                                                <figure className="product-image--holder">
                                                                    <img src="assets/img/products/prod-05-270x300.jpg" alt="Product" />
                                                                </figure>
                                                                <a href="product-details.html" className="product-overlay"></a>
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                        <i className="la la-eye"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-heart-o"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-repeat"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-info">
                                                                <div className="product-category">
                                                                    <a href="product-details.html">Chair</a>
                                                                </div>
                                                                <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                                <div className="product-info-bottom">
                                                                    <div className="product-price-wrapper">
                                                                        <span className="money">$150</span>
                                                                    </div>
                                                                    <a href="#" className="add-to-cart pr--15">
                                                                        <i className="la la-plus"></i>
                                                                        <span>Add To Cart</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 mb--45">
                                                    <div className="ft-product HTfadeInUp">
                                                        <div className="product-inner">
                                                            <div className="product-image">
                                                                <figure className="product-image--holder">
                                                                    <img src="assets/img/products/prod-03-270x300.jpg" alt="Product" />
                                                                </figure>
                                                                <a href="product-details.html" className="product-overlay"></a>
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                        <i className="la la-eye"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-heart-o"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-repeat"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-info">
                                                                <div className="product-category">
                                                                    <a href="product-details.html">Chair</a>
                                                                </div>
                                                                <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                                <div className="product-info-bottom">
                                                                    <div className="product-price-wrapper">
                                                                        <span className="money">$150</span>
                                                                    </div>
                                                                    <a href="#" className="add-to-cart pr--15">
                                                                        <i className="la la-plus"></i>
                                                                        <span>Add To Cart</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="new-table" role="tabpanel" aria-labelledby="new-table-tab">
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-6 mb--45">
                                                    <div className="ft-product HTfadeInUp">
                                                        <div className="product-inner">
                                                            <div className="product-image">
                                                                <figure className="product-image--holder">
                                                                    <img src="assets/img/products/prod-03-270x300.jpg" alt="Product" />
                                                                </figure>
                                                                <a href="product-details.html" className="product-overlay"></a>
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                        <i className="la la-eye"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-heart-o"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-repeat"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-info">
                                                                <div className="product-category">
                                                                    <a href="product-details.html">Chair</a>
                                                                </div>
                                                                <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                                <div className="product-info-bottom">
                                                                    <div className="product-price-wrapper">
                                                                        <span className="money">$150</span>
                                                                    </div>
                                                                    <a href="#" className="add-to-cart pr--15">
                                                                        <i className="la la-plus"></i>
                                                                        <span>Add To Cart</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 mb--45">
                                                    <div className="ft-product HTfadeInUp">
                                                        <div className="product-inner">
                                                            <div className="product-image">
                                                                <figure className="product-image--holder">
                                                                    <img src="assets/img/products/prod-10-270x300.png" alt="Product" />
                                                                </figure>
                                                                <a href="product-details.html" className="product-overlay"></a>
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                        <i className="la la-eye"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-heart-o"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-repeat"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-info">
                                                                <div className="product-category">
                                                                    <a href="product-details.html">Chair</a>
                                                                </div>
                                                                <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                                <div className="product-info-bottom">
                                                                    <div className="product-price-wrapper">
                                                                        <span className="money">$150</span>
                                                                    </div>
                                                                    <a href="#" className="add-to-cart pr--15">
                                                                        <i className="la la-plus"></i>
                                                                        <span>Add To Cart</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 mb--45">
                                                    <div className="ft-product HTfadeInUp">
                                                        <div className="product-inner">
                                                            <div className="product-image">
                                                                <figure className="product-image--holder">
                                                                    <img src="assets/img/products/prod-04-270x300.jpg" alt="Product" />
                                                                </figure>
                                                                <a href="product-details.html" className="product-overlay"></a>
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                        <i className="la la-eye"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-heart-o"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-repeat"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-info">
                                                                <div className="product-category">
                                                                    <a href="product-details.html">Chair</a>
                                                                </div>
                                                                <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                                <div className="product-info-bottom">
                                                                    <div className="product-price-wrapper">
                                                                        <span className="money">$150</span>
                                                                    </div>
                                                                    <a href="#" className="add-to-cart pr--15">
                                                                        <i className="la la-plus"></i>
                                                                        <span>Add To Cart</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 mb--45">
                                                    <div className="ft-product HTfadeInUp">
                                                        <div className="product-inner">
                                                            <div className="product-image">
                                                                <figure className="product-image--holder">
                                                                    <img src="assets/img/products/prod-03-270x300.jpg" alt="Product" />
                                                                </figure>
                                                                <a href="product-details.html" className="product-overlay"></a>
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#productModal" className="action-btn">
                                                                        <i className="la la-eye"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-heart-o"></i>
                                                                    </a>
                                                                    <a href="#" className="action-btn">
                                                                        <i className="la la-repeat"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-info">
                                                                <div className="product-category">
                                                                    <a href="product-details.html">Chair</a>
                                                                </div>
                                                                <h3 className="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
                                                                <div className="product-info-bottom">
                                                                    <div className="product-price-wrapper">
                                                                        <span className="money">$150</span>
                                                                    </div>
                                                                    <a href="#" className="add-to-cart pr--15">
                                                                        <i className="la la-plus"></i>
                                                                        <span>Add To Cart</span>
                                                                    </a>
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
                    </section>
                    {/* Product Tab Area End  */}

                    {/* Best Sale Product Area Start */}
                    <section className="best-sale-product-area mb--75 mb-md--55">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="best-sale-product bg-color" data-bg-color="#f7f8f9">
                                        <div className="best-sale-product__inner bg-color" data-bg-color="#ffffff">
                                            <figure className="best-sale-product__img">
                                                <a href="product-details.html">
                                                    <img src="assets/img/products/best-product-01.png" alt="Best Sale Product" />
                                                </a>
                                            </figure>
                                            <div className="best-sale-product__info">
                                                <h2 className="best-sale-product__heading">
                                                    <span className="best-sale-product__heading--main">Best Sale</span>
                                                    <span className="best-sale-product__heading--sub">Get Best Discount</span>
                                                </h2>
                                                <p className="best-sale-product__desc">It is a long established fact that a reader will be distracted by the readable content</p>
                                                <a href="shop.html" className="btn btn-outline btn-size-md btn-color-primary btn-shape-round btn-hover-2">Shop Now</a>
                                            </div>
                                        </div>
                                        <figure className="best-sale-product__top-image">
                                            <img src="assets/img/others/1.png" alt="bg image" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Best Sale Product Area End  */}
                </main>
                {/* Main Content Wrapper End */}

                <Rest></Rest>

                {/* Global Overlay Start */}
                <div className="global-overlay"></div>
                {/* Global Overlay End */}

                {/* Global Overlay Start */}
                <a className="scroll-to-top" href=""><i className="la la-angle-double-up"></i></a>
                {/* Global Overlay End */}
            </div>
            {/* Main Wrapper End */}

            <script src="assets/js/vendor.js"></script>
            <script src="assets/js/main.js"></script>
        </>
    );
}