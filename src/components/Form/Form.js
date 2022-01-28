// STYLE
import './Form.style.css';

const Form = () => {
  return (
    <main>
      <form className='form'>
        <div className='inputContainer'>
          <input className='input topText' type='text' placeholder='Top text' />
          <input
            className='input bottomText'
            type='text'
            placeholder='Bottom text'
          />
        </div>
        <button type='submit'>Get a new meme image</button>
      </form>
    </main>
  );
};

export default Form;
