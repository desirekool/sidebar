import logo from './baba2000.jpg'
import { social, links } from './data';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context'; 

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : null}`}>
      <div className='sidebar-heaqder'>
        <img src={logo} alt='coding addict' className='logo' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        
      </div>
      <ul className='links'>
        {links.map(({id, url, text, icon}) => <li key={id}><a href={url}>{icon} {text}</a></li>)}
      </ul>
            <ul className='social-links'>
        {links.map(({id, url, icon}) => <li key={id}><a href={url}>{icon}</a></li>)}
      </ul>
    </aside>
  );
};
  export default Sidebar;