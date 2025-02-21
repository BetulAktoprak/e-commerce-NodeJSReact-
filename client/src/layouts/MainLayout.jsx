import PropTypes from 'prop-types';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';
import Policy from '../components/layout/policy/Policy';


function MainLayout({ children }) {
    return (
        <div className="main-layout">
            <Header />
            {children}
            <Policy />
            <Footer />
        </div>
    )
}

export default MainLayout

MainLayout.propTypes = {
    children: PropTypes.node
}