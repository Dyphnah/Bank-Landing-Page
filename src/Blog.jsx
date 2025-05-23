import './Blog.css';
import Money from './assets/images/image-currency.jpg';
import Dining from './assets/images/image-restaurant.jpg';
import Plane from './assets/images/image-plane.jpg';
import Confetti from './assets/images/image-confetti.jpg';

export default function Blog() {
    
    return (
        <>

            <section className='blog-section'>

                <div>
                    <h2>Latest Articles </h2>
                </div>  

                <div className="articles-container">

                    <div className="articles">
                        <img src={Money} alt="currency" />
                        <h6>By Claire Robinson</h6>
                        <h3>Receive money in any currency with no fees</h3>
                        <p>The world is getting smaller and we're becoming more mobile. So
                            why should you be forced to only receive money in a single ...
                        </p>
                    </div>

                    <div className="articles">
                        <img src={Dining} alt="restaurant" />
                        <h6>By Wilson Hutton</h6>
                        <h3>Treat yourself without worrying about money</h3>
                        <p>
                            Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...
                        </p>
                    </div>

                    <div className="articles">
                        <img src={Plane} alt="plane" />
                        <h6>By Wilson Hutton</h6>
                        <h3>Take your Easybank card wherever you go</h3>
                        <p>
                            We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...
                        </p>
                    </div>

                    <div className="articles">
                        <img src={Confetti} alt="confetti" />
                        <h6>By Claire Robinson</h6>
                        <h3>Our invite-only Beta accounts are now live!</h3>
                        <p>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...
                        </p>
                    </div>
                </div>

            </section>
        
        </>
    )
}
