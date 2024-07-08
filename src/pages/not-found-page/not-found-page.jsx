import '../not-found-page/not-found-page.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ViewButton from '../../components/view-button/view-button';

function NotFoundPage() {
    const nameButton = 'Back to home page';

    return (
        <>
            <Header />
            <div className="container">
                <section className='not-found-section'>
                    <p className="home-page">Home / <span className="current-page">404 Error</span></p>
                    <div className="not-found-block">
                        <h1 className="not-found-title">404 Not Found</h1>
                        <p className="not-found-descr">Your visited page not found. You may go home page.</p>
                        <div className="not-found-back__btn">
                            <ViewButton name={nameButton} />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default NotFoundPage;