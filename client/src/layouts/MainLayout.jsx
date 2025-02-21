import PropTypes from 'prop-types';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';
import Policy from '../components/layout/policy/Policy';
import Search from '../components/layout/modals/Search';
import Dialog from '../components/layout/modals/Dialog';
import { useState } from "react"

function MainLayout({ children }) {
    const [isSearchShow, setIsSearchShow] = useState(false);
    return (
        <div className="main-layout">
            <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
            <Dialog />
            <Header setIsSearchShow={setIsSearchShow} />
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