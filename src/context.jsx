import { createContext, useState, useContext } from 'react';

export const AppContext = createContext();
export const useGlobalContext = () => useContext(AppContext);

const AppProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

  const globalContextObject = {
   isModalOpen, 
   setIsModalOpen, 
   openModal, 
   closeModal, 
   isSidebarOpen, 
   setIsSidebarOpen, 
   openSidebar, 
   closeSidebar 
  }

  return (
    <main>
      <AppContext.Provider value={globalContextObject}>
        {children}
      </AppContext.Provider>
    </main>
  );
};
export default AppProvider;