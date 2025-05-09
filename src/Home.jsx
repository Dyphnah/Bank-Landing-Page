import BgImage from './assets/images/bg-intro-desktop.svg';
import MockUps from './assets/images/image-mockups.png';
import Blog from './Blog';
import './Home.css';

function Home() {
    
    return (
        <>
            <section className="home-content">
                <div>
                    <h1>Next generation digital banking</h1>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
                        saving, budgeting, investing, and much more.
                    </p>
                </div>
                <div>
                    <img src={BgImage} alt="bg-image" />
                    <img src={MockUps} alt="phone-mockups" />
                </div>
            
            </section>
            <section className='other-content'>
                <div>
                    <h2>Why choose Easybank?</h2>
                    <p>
                        We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
                    </p>
                </div>
                <div className='card'>
                    <img src="" alt="" />
                    <h3>Online Banking</h3>
                    <p>Banking Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>
                <div className='card'>
                    <img src="" alt="" />
                    <h3>Simple Budgeting </h3>
                    <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                </div>
                <div className='card'>
                    <img src="" alt="" />
                    <h3>Fast Onboarding</h3>
                    <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>
                <div className='card'>
                    <img src="" alt="" />
                    <h3>Open API</h3>
                    <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                 </div>   
            </section>
            <Blog/>
    </>

    )
}

export default Home;