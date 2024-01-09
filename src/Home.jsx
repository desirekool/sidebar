import { useGlobalContext } from './context'
import {FaBars} from 'react-icons/fa';

const Home = () => {
    const {openSidebar, openModal} = useGlobalContext();
    return (
        <main>
            <button type="button" className="btn" onClick={() => {openSidebar()}} ><FaBars /></button>
            <button type="button" className="btn" onClick={() => {openModal()}} >show Modal</button>
        </main>
    );
  };
  export default Home;