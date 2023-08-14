import './footer.scss'
import LogoFooter from '../../assets/logo_footer.png';

function Footer() {
    return (
    <div className="footer">
        <img src={LogoFooter} alt="Logo Kasa" className="logo_footer" />
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
    )
}

export default Footer;