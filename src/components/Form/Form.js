// STYLE
import './Form.style.css';

// HOOKS
import { useState } from 'react';

const Form = ({ data }) => {
  
  // INITIAL INPUT STATE
  const [inputText, setInputText] = useState({ topText: '', bottomText: '' });
  const handleTextInput = ({ target }) => {
    setInputText((prevInputText) => ({
      ...prevInputText,
      [target.name]: target.value,
    }));
  };

  // INITIAL IMAGE STATE
  const [memeImg, setMemeImg] = useState('http://i.imgflip.com/1bij.jpg');
  const handleClick = (event) => {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * data.data.memes.length);
    const newUrl = data.data.memes[randomIndex].url;
    setMemeImg(newUrl);
  };

  return (
    <main>
      <form className='form'>
        <div className='inputContainer'>
          <input
            className='input topText'
            type='text'
            placeholder='Top text'
            name='topText'
            value={inputText.topText}
            onChange={handleTextInput}
          />
          <input
            className='input bottomText'
            type='text'
            placeholder='Bottom text'
            name='bottomText'
            value={inputText.bottomText}
            onChange={handleTextInput}
          />
        </div>
        <button onClick={handleClick} type='submit'>
          Get a new meme image
        </button>
      </form>
      <div className='imgContainer'>
        <p className='memeTopText'>{inputText.topText}</p>
        <img className='memeImg' src={memeImg} alt='' />
        <p className='memeBottomText'>{inputText.bottomText}</p>
      </div>
    </main>
  );
};

export default Form;
