// STYLE
import './Meme.style.css';

// COMPONENTS
import Form from '../Form/Form';

// MEME DATA OBJ
import { memesData } from '../../memesData';

const Meme = () => {
    
  return (
    <div className='meme'>
      <Form data={memesData}/>
    </div>
  );
};

export default Meme;
