// STYLE
import './Header.style.css';

// HEADER IMG
import trollFace from '../../images/trollFace.png';

const Header = () => {
    return(
        <header className='header'>
            <img className='header__img' src={trollFace} alt="" />
            <h4 className='header__title'>Meme Generator</h4>
            <p className='header__text'>React Course - Project 03</p>
        </header>
    )
}

export default Header;