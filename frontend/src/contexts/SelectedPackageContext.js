import { createContext, useState } from 'react';

const SelectedPackageContext = createContext();

export const SelectedPackageProvider = ({ children }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <SelectedPackageContext.Provider value={{ selectedPackage, setSelectedPackage }}>
      {children}
    </SelectedPackageContext.Provider>
  );
};

export default SelectedPackageContext;