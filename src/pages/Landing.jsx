import React from 'react';
import './themes/Landing.css';
import { SocialIcon } from 'react-social-icons';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { CiMenuBurger } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';
const Landing = () => {
    
    return (
        <div id="top">
            <header className="header">
                <div className="header-top">
                    <div className="container">

                        <div className="countdown-text">
                            Welcome to the Kenya University Esports Ranking community.  <span className="span skewBg"> (KUER)! </span> Join us
                        </div>

                        <div className="social-wrapper">

                            <p className="social-title">Follow us on :</p>

                            <ul className="social-list">

                                <li>
                                    <a href="/" className="social-link">
                                        <SocialIcon network="facebook" style={{ width: 28, height: 28 }} />
                                    </a>
                                </li>

                                <li>
                                    <a href="/" className="social-link">
                                        <SocialIcon network="twitter" style={{ width: 28, height: 28 }} />
                                    </a>
                                </li>

                                <li>
                                    <a href="/" className="social-link">
                                        <SocialIcon network="pinterest" style={{ width: 28, height: 28 }} />
                                    </a>
                                </li>

                                <li>
                                    <a href="/" className="social-link">
                                        <SocialIcon network="linkedin" style={{ width: 28, height: 28 }} />
                                    </a>
                                </li>

                            </ul>

                        </div>

                    </div>
                </div>

                <div className="header-bottom skewBg" data-header>
                    <div className="container">

                        <a href="/" className="logo">KUER</a>

                        <nav className="navbar" data-navbar>
                            <ul className="navbar-list">

                                <li className="navbar-item">
                                    <a href="/home" className="navbar-link skewBg" data-nav-link>Home</a>
                                </li>

                                <li className="navbar-item">
                                    <a href="/live" className="navbar-link skewBg" data-nav-link>Live</a>
                                </li>

                                <li className="navbar-item">
                                    <a href="/features" className="navbar-link skewBg" data-nav-link>Features</a>
                                </li>

                                <li className="navbar-item">
                                    <a href="/shop" className="navbar-link skewBg" data-nav-link>Shop</a>
                                </li>

                                <li className="navbar-item">
                                    <a href="/blog" className="navbar-link skewBg" data-nav-link>Blog</a>
                                </li>

                                <li className="navbar-item">
                                    <a href="/" className="navbar-link skewBg" data-nav-link>Contact</a>
                                </li>

                                <li className="navbar-item">
                                    <a href="/loginRegister" className="navbar-link skewBg" data-nav-link>login</a>
                                </li>

                            </ul>
                        </nav>

                        <div className="header-actions">

                            <button className="cart-btn" aria-label="cart">
                                <FaShoppingCart />

                                <span className="cart-badge">0</span>
                            </button>

                            <button className="search-btn" aria-label="open search" data-search-toggler>
                                <FaSearch style={{ width: 20, height: 20 }} />
                            </button>

                            <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
                                <CiMenuBurger />
                                <IoCloseOutline />
                            </button>

                        </div>

                    </div>
                </div>

            </header>

            <div className="search-container" data-search-box>

                <div className="input-wrapper">
                    <input type="search" name="search" aria-label="search" placeholder="Search here..." className="search-field" />

                    <button className="search-submit" aria-label="submit search" data-search-toggler>
                        {/* <ion-icon name="search-outline"></ion-icon> */}
                    </button>

                    <button className="search-close" aria-label="close search" data-search-toggler></button>
                </div>

            </div>

            <main>
                <article>
                    <section
                        className="section hero"
                        id="home"
                        aria-label="home"
                        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
                    >
                        <div className="container ">

                            <div className="hero-content grid grid-cols-2">
                                <span></span>
                                <div>
                                    <p className="hero-subtitle">World Gaming</p>

                                <h1 className="h1 hero-title">
                                    Kenya University <span className="span">Esports</span> Ranking
                                </h1>

                                <p className="hero-text">
                                    Welcome to the Kenya University Esports Ranking community. Where we will be doing monthly tournaments that rank gamers in universities.

                                </p>

                                <button className="btn skewBg">Read More</button>
                                </div>
                                

                            </div>

                            <figure className="hero-banner img-holder" style={{ width: "700px", height: "700px" }}>
                                <img src="./images/hero-banner.png" width="700" height="700" alt="hero banner" className="w-100" />
                            </figure>

                        </div>
                    </section>

                    <section className="section brand" aria-label="brand">
                        <div className="container">

                            <ul className="has-scrollbar">

                                <li className="brand-item">
                                    <img src="./images/brand-1.png" width="90" height="90" loading="lazy" alt="brand logo" />
                                </li>

                                <li className="brand-item">
                                    <img src="/images/brand-2.png" width="90" height="90" loading="lazy" alt="brand logo" />
                                </li>

                                <li className="brand-item">
                                    <img src="/images/brand-3.png" width="90" height="90" loading="lazy" alt="brand logo" />
                                </li>

                                <li className="brand-item">
                                    <img src="/images/brand-4.png" width="90" height="90" loading="lazy" alt="brand logo" />
                                </li>

                                <li className="brand-item">
                                    <img src="/images/brand-5.png" width="90" height="90" loading="lazy" alt="brand logo" />
                                </li>

                                <li className="brand-item">
                                    <img src="/images/brand-6.png" width="90" height="90" loading="lazy" alt="brand logo" />
                                </li>

                            </ul>

                        </div>
                    </section>





                    <div className="section-wrapper">

                        <section className="section latest-game" aria-label="latest game">
                            <div className="container">

                                <p className="section-subtitle">Games</p>

                                <h2 className="h2 section-title">
                                    Gamers & <span className="span">Games</span>
                                </h2>

                                <ul className="has-scrollbar">

                                    <li className="scrollbar-item">
                                        <div className="latest-game-card">

                                            <figure className="card-banner img-holder" style={{ width: "400px", height: "470px" }}>
                                                <img src="/images/latest-game-1.jpg" width="400" height="470" loading="lazy"
                                                    alt="White Walker Daily" className="img-cover" />
                                            </figure>

                                            <div className="card-content">

                                                <a href="/" className="card-badge skewBg">Action</a>

                                                <h3 className="h3">
                                                    <a href="/" className="card-title">Call of duty  <span className="span">mobile</span></a>
                                                </h3>

                                                <p className="card-price">
                                                    Entry Fee : <span className="span">Free</span>
                                                </p>

                                            </div>

                                        </div>
                                    </li>

                                    <li className="scrollbar-item">
                                        <div className="latest-game-card">

                                            <figure className="card-banner img-holder" style={{ width: "400px", height: "470px" }}>
                                                <img src="/images/latest-game-2.jpg" width="400" height="470" loading="lazy"
                                                    alt="Hunter Killer II" className="img-cover" />
                                            </figure>

                                            <div className="card-content">

                                                <a href="/" className="card-badge skewBg">Action</a>

                                                <h3 className="h3">
                                                    <a href="/" className="card-title">player unknown  <span className="span">battle grounds</span></a>
                                                </h3>

                                                <p className="card-price">
                                                    Entry Fee : <span className="span">free</span>
                                                </p>

                                            </div>

                                        </div>
                                    </li>

                                    <li className="scrollbar-item">
                                        <div className="latest-game-card">

                                            <figure className="card-banner img-holder" style={{ width: "400px", height: "470px" }}>
                                                <img src="/images/latest-game-3.jpg" width="400" height="470" loading="lazy"
                                                    alt="Cyberpunk Daily" className="img-cover" />
                                            </figure>

                                            <div className="card-content">

                                                <a href="/" className="card-badge skewBg">strategy</a>

                                                <h3 className="h3">
                                                    <a href="/" className="card-title">Efootball<span className="span">offline</span></a>
                                                </h3>

                                                <p className="card-price">
                                                    Entry Fee : <span className="span">free</span>
                                                </p>

                                            </div>

                                        </div>
                                    </li>

                                </ul>

                            </div>
                        </section>

                        <section className="section live-match" id="live" aria-label="live match">
                            <div className="container">

                                <h2 className="h2 section-title">
                                    Watch Live <span className="span">Match</span>
                                </h2>


                                <figure className="live-match-banner img-holder" style={{ width: "800px", height: "470px" }}>

                                    <img src="/images/live-match-banner.jpg" width="800" height="470" loading="lazy"
                                        alt="Live Match Video" className="img-cover" />

                                    <button className="play-btn" aria-label="play video">
                                        {/* <ion-icon name="play"></ion-icon> */}
                                    </button>

                                </figure>

                                <div className="live-match-player">

                                    <figure className="player player-1 img-holder" style={{ width: "406px", height: "277px" }}>
                                        <img src="/images/live-match-player-1.png" width="406" height="277" loading="lazy"
                                            alt="tokyo eagle" className="w-100" />
                                    </figure>

                                    <div className="live-match-detail">

                                        <p className="live-match-subtitle">Upcoming Live Matches</p>

                                        <time className="live-match-time" dateTime="08:30">08:30</time>

                                    </div>

                                    <figure className="player player-2 img-holder" style={{ width: "400px", height: "305px" }}>
                                        <img src="/images/live-match-player-2.png" width="400" height="305" loading="lazy"
                                            alt="new york hunter7" className="w-100" />
                                    </figure>

                                </div>

                            </div>
                        </section>

                    </div>

                    <section className="section featured-game" id="features" aria-label="featured game">
                        <div className="container">

                            <h2 className="h2 section-title">
                                Gamers <span className="span">Corner</span>
                            </h2>

                            <ul className="has-scrollbar">

                                <li className="scrollbar-item">
                                    <div className="featured-game-card">

                                        <figure className="card-banner img-holder" style={{ width: "450px", height: "600px" }}>
                                            <img src="/images/featured-game-1.jpg" width="450" height="600" loading="lazy"
                                                alt="Just for Gamers" className="img-cover" />
                                        </figure>
                                        /
                                        <div className="card-content">

                                            <h3 className="h3">
                                                <a href="/" className="card-title" tabIndex={-1}>
                                                    Just for <span className="span">Gamers</span>
                                                </a>
                                            </h3>

                                            <span className="card-meta">
                                                {/* <ion-icon name="notifications"></ion-icon> */}

                                                <span className="span">kenya esports ranking</span>
                                            </span>

                                        </div>

                                        <div className="card-content-overlay">

                                            <img src="/images/featured-game-icon.png" width="36" height="61" loading="lazy" alt=""
                                                className="card-icon" />

                                            <h3 className="h3">
                                                <a href="/" className="card-title">
                                                    Just for <span className="span">Gamers</span>
                                                </a>
                                            </h3>

                                            <span className="card-meta">
                                                {/* <ion-icon name="notifications"></ion-icon> */}

                                                <span className="span">kenya esports ranking</span>
                                            </span>

                                        </div>

                                    </div>
                                </li>

                                <li className="scrollbar-item">
                                    <div className="featured-game-card">

                                        <figure className="card-banner img-holder" style={{ width: "450px", height: "600px" }}>
                                            <img src="/images/featured-game-2.jpg" width="450" height="600" loading="lazy"
                                                alt="Need for Speed" className="img-cover" />
                                        </figure>

                                        <div className="card-content">

                                            <h3 className="h3">
                                                <a href="/" className="card-title" tabIndex={-1}>
                                                    Need for <span className="span">Speed</span>
                                                </a>
                                            </h3>

                                            <span className="card-meta">
                                                {/* <ion-icon name="notifications"></ion-icon> */}

                                                <span className="span">kenya esports ranking </span>
                                            </span>

                                        </div>

                                        <div className="card-content-overlay">

                                            <img src="/images/featured-game-icon.png" width="36" height="61" loading="lazy" alt=""
                                                className="card-icon" />

                                            <h3 className="h3">
                                                <a href="/" className="card-title">
                                                    Need for <span className="span">Speed</span>
                                                </a>
                                            </h3>

                                            <span className="card-meta">
                                                {/* <ion-icon name="notifications"></ion-icon> */}

                                                <span className="span">kenya esports ranking</span>
                                            </span>

                                        </div>

                                    </div>
                                </li>

                                <li className="scrollbar-item">
                                    <div className="featured-game-card">

                                        <figure className="card-banner img-holder" style={{ width: "450px", height: "600px" }}>
                                            <img src="/images/featured-game-3.jpg" width="450" height="600" loading="lazy"
                                                alt="Egypt Hunting Gamers" className="img-cover" />
                                        </figure>

                                        <div className="card-content">

                                            <h3 className="h3">
                                                <a href="/" className="card-title" tabIndex={-1}>
                                                    Just For <span className="span">Gamers</span>
                                                </a>
                                            </h3>

                                            <span className="card-meta">
                                                {/* <ion-icon name="notifications"></ion-icon> */}

                                                <span className="span">kenya esports ranking</span>
                                            </span>

                                        </div>

                                        <div className="card-content-overlay">

                                            <img src="/images/featured-game-icon.png" width="36" height="61" loading="lazy" alt=""
                                                className="card-icon" />

                                            <h3 className="h3">
                                                <a href="/" className="card-title">
                                                    just for <span className="span">Gamers</span>
                                                </a>
                                            </h3>

                                            <span className="card-meta">
                                                {/* <ion-icon name="notifications"></ion-icon> */}

                                                <span className="span">kenya esports ranking </span>
                                            </span>

                                        </div>

                                    </div>
                                </li>

                                <li className="scrollbar-item">
                                    <div className="featured-game-card">

                                        <figure className="card-banner img-holder" style={{ width: "450px", height: "600px" }}>
                                            <img src="/images/featured-game-4.jpg" width="450" height="600" loading="lazy"
                                                alt="Just for Gamers" className="img-cover" />
                                        </figure>

                                        <div className="card-content">

                                            <h3 className="h3">
                                                <a href="/" className="card-title" tabIndex={-1}>
                                                    Just for <span className="span">Gamers</span>
                                                </a>
                                            </h3>

                                            <span className="card-meta">
                                                {/* <ion-icon name="notifications"></ion-icon> */}

                                                <span className="span">kenya esports ranking</span>
                                            </span>

                                        </div>

                                        <div className="card-content-overlay">

                                            <img src="/images/featured-game-icon.png" width="36" height="61" loading="lazy" alt=""
                                                className="card-icon" />

                                            <h3 className="h3">
                                                <a href="/" className="card-title">
                                                    Just for <span className="span">Gamers</span>
                                                </a>
                                            </h3>

                                            <span className="card-meta">
                                                {/* <ion-icon name="notifications"></ion-icon> */}

                                                <span className="span">kenya esports ranking</span>
                                            </span>

                                        </div>

                                    </div>
                                </li>

                            </ul>

                        </div>
                    </section>

                    <section
                        className="section shop"
                        id="shop"
                        aria-label="shop"
                        style={{ backgroundImage: "url('/images/shop-bg.jpg')" }}
                    >
                        <div className="container">

                            <h2 className="h2 section-title">
                                Gaming Product <span className="span">Corner</span>
                            </h2>

                            <p className="section-text">
                                Compete with 100 players on a remote island for winner takes showdown known issue where certain skin
                                strategic
                            </p>

                            <ul className="has-scrollbar">

                                <li className="scrollbar-item">
                                    <div className="shop-card">

                                        <figure className="card-banner img-holder" style={{ width: "300px", height: "260px" }}>
                                            <img src="/images/shop-img-1.jpg" width="300" height="260" loading="lazy"
                                                alt="Women Black T-Shirt" className="img-cover" />
                                        </figure>

                                        <div className="card-content">

                                            <a href="/" className="card-badge skewBg">t-shirt</a>

                                            <h3 className="h3">
                                                <a href="/" className="card-title">Women Black T-Shirt</a>
                                            </h3>

                                            <div className="card-wrapper">
                                                <p className="card-price">$29.00</p>

                                                <button className="card-btn">
                                                    {/* <ion-icon name="basket"></ion-icon> */}
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                </li>

                                <li className="scrollbar-item">
                                    <div className="shop-card">

                                        <figure className="card-banner img-holder" style={{ width: "300px", height: "260px" }}>
                                            <img src="/images/shop-img-2.jpg" width="300" height="260" loading="lazy"
                                                alt="Gears 5 Xbox Controller" className="img-cover" />
                                        </figure>

                                        <div className="card-content">

                                            <a href="/" className="card-badge skewBg">x-box</a>

                                            <h3 className="h3">
                                                <a href="/" className="card-title">Gears 5 Xbox Controller</a>
                                            </h3>

                                            <div className="card-wrapper">
                                                <p className="card-price">$29.00</p>

                                                <button className="card-btn">
                                                    {/* <ion-icon name="basket"></ion-icon> */}
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                </li>

                                <li className="scrollbar-item">
                                    <div className="shop-card">

                                        <figure className="card-banner img-holder" style={{ width: "300px", height: "260px" }}>
                                            <img src="/images/shop-img-3.jpg" width="300" height="260" loading="lazy"
                                                alt="GeForce RTX 2070" className="img-cover" />
                                        </figure>

                                        <div className="card-content">

                                            <a href="/" className="card-badge skewBg">Graphics</a>

                                            <h3 className="h3">
                                                <a href="/" className="card-title">GeForce RTX 2070</a>
                                            </h3>

                                            <div className="card-wrapper">
                                                <p className="card-price">$29.00</p>

                                                <button className="card-btn">
                                                    {/* <ion-icon name="basket"></ion-icon> */}
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                </li>

                                <li className="scrollbar-item">
                                    <div className="shop-card">

                                        <figure className="card-banner img-holder" style={{ width: "300px", height: "260px" }}>
                                            <img src="/images/shop-img-4.jpg" width="300" height="260" loading="lazy"
                                                alt="Virtual Reality Smiled" className="img-cover" />
                                        </figure>

                                        <div className="card-content">

                                            <a href="/" className="card-badge skewBg">VR-Box</a>

                                            <h3 className="h3">
                                                <a href="/" className="card-title">Virtual Reality Smiled</a>
                                            </h3>

                                            <div className="card-wrapper">
                                                <p className="card-price">$29.00</p>

                                                <button className="card-btn">
                                                    {/* <ion-icon name="basket"></ion-icon> */}
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                </li>

                            </ul>

                        </div>
                    </section>

                    <section className="section blog" id="blog" aria-label="blog">
                        <div className="container">

                            <h2 className="h2 section-title">
                                Latest News & <span className="span">Articles</span>
                            </h2>

                            <p className="section-text">
                                Compete With 100 Players On A Remote Island For Winner Takes Showdown Known Issue Where Certain Skin
                                Strategic
                            </p>

                            <ul className="blog-list">

                                <li>
                                    <div className="blog-card">

                                        <figure className="card-banner img-holder" style={{ width: "400px", height: "290px" }}>
                                            <img src="/images/blog-1.jpg" width="400" height="290" loading="lazy"
                                                alt="Shooter Action Video" className="img-cover" />
                                        </figure>

                                        <div className="card-content">

                                            <ul className="card-meta-list">

                                                <li className="card-meta-item">
                                                    {/* <ion-icon name="person-outline"></ion-icon> */}

                                                    <a href="/" className="item-text">Admin</a>
                                                </li>

                                                <li className="card-meta-item">
                                                    {/* <ion-icon name="calendar-outline"></ion-icon> */}

                                                    <time dateTime="2022-09-19" className="item-text">September 19, 2022</time>
                                                </li>

                                            </ul>

                                            <h3>
                                                <a href="/" className="card-title">Shooter Action Video</a>
                                            </h3>

                                            <p className="card-text">
                                                Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.
                                            </p>

                                            <a href="/" className="card-link">
                                                <span className="span">Read More</span>

                                                {/* <ion-icon name="caret-forward"></ion-icon> */}
                                            </a>

                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div className="blog-card">

                                        <figure className="card-banner img-holder" style={{ width: "400px", height: "290px" }}>
                                            <img src="/images/blog-2.jpg" width="400" height="290" loading="lazy" alt="The Walking Dead"
                                                className="img-cover" />
                                        </figure>

                                        <div className="card-content">

                                            <ul className="card-meta-list">

                                                <li className="card-meta-item">
                                                    {/* <ion-icon name="person-outline"></ion-icon> */}

                                                    <a href="/" className="item-text">Admin</a>
                                                </li>

                                                <li className="card-meta-item">
                                                    {/* <ion-icon name="calendar-outline"></ion-icon> */}

                                                    <time dateTime="2022-09-19" className="item-text">September 19, 2022</time>
                                                </li>

                                            </ul>

                                            <h3>
                                                <a href="/" className="card-title">The Walking Dead</a>
                                            </h3>

                                            <p className="card-text">
                                                Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.
                                            </p>

                                            <a href="/" className="card-link">
                                                <span className="span">Read More</span>

                                                {/* <ion-icon name="caret-forward"></ion-icon> */}
                                            </a>

                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div className="blog-card">

                                        <figure className="card-banner img-holder" style={{ width: "400px", height: "290px" }}>
                                            <img src="/images/blog-3.jpg" width="400" height="290" loading="lazy"
                                                alt="Defense Of The Ancients" className="img-cover" />
                                        </figure>

                                        <div className="card-content">

                                            <ul className="card-meta-list">

                                                <li className="card-meta-item">
                                                    {/* <ion-icon name="person-outline"></ion-icon> */}

                                                    <a href="/" className="item-text">Admin</a>
                                                </li>

                                                <li className="card-meta-item">
                                                    {/* <ion-icon name="calendar-outline"></ion-icon> */}

                                                    <time dateTime="2022-09-19" className="item-text">September 19, 2022</time>
                                                </li>

                                            </ul>

                                            <h3>
                                                <a href="/" className="card-title">Defense Of The Ancients</a>
                                            </h3>

                                            <p className="card-text">
                                                Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.
                                            </p>

                                            <a href="/" className="card-link">
                                                <span className="span">Read More</span>

                                                {/* <ion-icon name="caret-forward"></ion-icon> */}
                                            </a>

                                        </div>

                                    </div>
                                </li>

                            </ul>

                        </div>
                    </section>

                    <section className="newsletter" aria-label="newsletter">
                        <div className="container">

                            <div className="newsletter-card">

                                <h2 className="h2">
                                    Our <span className="span">Newsletter</span>
                                </h2>

                                <form action="" className="newsletter-form">

                                    <div className="input-wrapper skewBg">
                                        <input type="email" name="email_address" aria-label="email" placeholder="Enter your email..." required
                                            className="email-field" />

                                        {/* <ion-icon name="mail-outline"></ion-icon> */}
                                    </div>

                                    <button type="submit" className="btn newsletter-btn skewBg">
                                        <span className="span">Subscribe</span>

                                        {/* <ion-icon name="paper-plane" aria-hidden="true"></ion-icon> */}
                                    </button>

                                </form>

                            </div>

                        </div>
                    </section>

                </article>
            </main>

            <footer className="footer">

                <div className="footer-top">
                    <div className="container">

                        <div className="footer-brand">

                            <a href="/" className="logo">KUER</a>

                            <p className="footer-text">
                                KUER marketplace for gaming content.
                            </p>

                            <ul className="contact-list">

                                <li className="contact-item">
                                    <div className="contact-icon">
                                        {/* <ion-icon name="location"></ion-icon> */}
                                    </div>

                                    <address className="item-text">
                                        Address : PO Box W75 Street lan West new queens
                                    </address>
                                </li>

                                <li className="contact-item">
                                    <div className="contact-icon">
                                        {/* <ion-icon name="headset"></ion-icon> */}
                                    </div>

                                    <a href="tel:+241245654235" className="item-text">Phone : +24 1245 654 235</a>
                                </li>

                                <li className="contact-item">
                                    <div className="contact-icon">
                                        {/* <ion-icon name="mail-open"></ion-icon> */}
                                    </div>

                                    <a href="mailto:info@exemple.com" className="item-text">Email : info@exemple.com</a>
                                </li>

                            </ul>

                        </div>

                        <ul className="footer-list">

                            <li>
                                <p className="footer-list-title">Products</p>
                            </li>

                            <li>
                                <a href="/" className="footer-link">Graphics (26)</a>
                            </li>

                            <li>
                                <a href="/" className="footer-link">Backgrounds (11)</a>
                            </li>

                            <li>
                                <a href="/" className="footer-link">Fonts (9)</a>
                            </li>

                            <li>
                                <a href="/" className="footer-link">Music (3)</a>
                            </li>

                            <li>
                                <a href="/" className="footer-link">Photography (3)</a>
                            </li>

                        </ul>

                        <ul className="footer-list">

                            <li>
                                <p className="footer-list-title">Need Help?</p>
                            </li>

                            <li>
                                <a href="/" className="footer-link">Terms & Conditions</a>
                            </li>

                            <li>
                                <a href="/" className="footer-link">Privacy Policy</a>
                            </li>

                            <li>
                                <a href="/" className="footer-link">Refund Policy</a>
                            </li>

                            <li>
                                <a href="/" className="footer-link">Affiliate</a>
                            </li>

                            <li>
                                <a href="/" className="footer-link">Use Cases</a>
                            </li>

                        </ul>

                        <div className="footer-wrapper">

                            <div className="social-wrapper">

                                <p className="footer-list-title">Follow Us</p>

                                <ul className="social-list">

                                    <li>
                                        <a href="/" className="social-link" style={{ backgroundColor: "/3b5998" }}>
                                            {/* <ion-icon name="logo-facebook"></ion-icon> */}
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/" className="social-link" style={{ backgroundColor: "/55acee" }}>
                                            {/* <ion-icon name="logo-twitter"></ion-icon> */}
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/" className="social-link" style={{ backgroundColor: "/d71e18" }}>
                                            {/* <ion-icon name="logo-pinterest"></ion-icon> */}
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/" className="social-link" style={{ backgroundColor: "/1565c0" }}>
                                            {/* <ion-icon name="logo-linkedin"></ion-icon> */}
                                        </a>
                                    </li>

                                </ul>

                            </div>

                            <div className="footer-newsletter">

                                <p className="footer-list-title">Newsletter Sign Up</p>

                                <form action="" className="footer-newsletter">
                                    <input type="email" name="email_address" aria-label="email" placeholder="Enter your email" required
                                        className="email-field" />

                                    <button type="submit" className="footer-btn" aria-label="submit">
                                        {/* <ion-icon name="rocket"></ion-icon> */}
                                    </button>
                                </form>

                            </div>

                        </div>

                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">

                        <p className="copyright">
                            &copy; 2024 KUER. All Right Reserved by <a href="/" className="copyright-link">codewithrickie&mwangi</a>
                        </p>

                        <img src="/images/footer-bottom-img.png" width="340" height="21" loading="lazy" alt=""
                            className="footer-bottom-img" />

                    </div>
                </div>

            </footer>

            <a href="/top" className="back-top-btn" aria-label="back to top" data-back-top-btn>
                {/* <ion-icon name="caret-up"></ion-icon> */}
            </a>

        </div>
    );
};

export default Landing;