export default function HomePage() {
    const getItems = (img: string) => {
        return (
            <div className="col-lg-3 col-sm-6 mb--45">
                <div className="ft-product HTfadeInUp">
                    <div className="product-inner">
                        <div className="product-image">
                            <figure className="product-image--holder">
                                <img src={img} alt="Product" />
                            </figure>
                            <a className="product-overlay"></a>
                            <div className="product-action">
                                <a href="/#" data-toggle="modal" data-target="#productModal" className="action-btn">
                                    <i className="la la-eye"></i>
                                </a>
                                <a href="/product" className="action-btn">
                                    <i className="la la-heart-o"></i>
                                </a>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3 className="product-title"><a href="/product">Golden Easy Spot Chair.</a></h3>
                            <div className="product-info-bottom">
                                <div className="product-price-wrapper">
                                    <span className="new-price">
                                        <span className="money">$150</span>
                                    </span>
                                    <span className="old-price">
                                        <span className="money">$200</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
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
                                                        <img src="assets/img/slider/slider-01-img-01.png" alt="Slider O1" className="mx-auto" />
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
                                                            <a href="/product" className="btn btn-outline btn-brw-2" data-animation="fadeInUp" data-duration=".3s" data-delay=".6s">Shop Now</a>
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
                                                        <img src="assets/img/slider/slider-02-img-01.png" alt="Slider O1" className="mx-auto" />
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
                                                            <a href="/#" className="btn btn-outline btn-brw-2 btn-brc-2" data-animation="fadeInUp" data-duration=".3s" data-delay=".6s">Shop Now</a>
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

                {/* Product Tab Area Start */}
                <section className="product-tab-area mb--30 mb-md--10">
                    <div className="container-fluid">
                        <div className="row mb--28 mb-md--18 mb-sm--33">
                            <div className="col-md-3 text-md-left text-center">
                                <h2>All Products</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="tab-content" id="product-tab-content">
                                    <div className="tab-pane fade show active" id="new-all" role="tabpanel">
                                        <div className="row">
                                            {getItems("assets/img/products/prod-01.png")}
                                            {getItems("assets/img/products/prod-01.png")}
                                            {getItems("assets/img/products/prod-02.png")}
                                            {getItems("assets/img/products/prod-02.png")}
                                            {getItems("assets/img/products/prod-03.png")}
                                            {getItems("assets/img/products/prod-03.png")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Product Tab Area End  */}
            </main>
            {/* Main Content Wrapper End */}
        </>
    );
}