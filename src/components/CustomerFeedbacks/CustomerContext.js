
import React, { createContext, useContext } from 'react';

const CustomerContext = createContext();

export const useCustomer = () => {
  return useContext(CustomerContext);
};

export const CustomerProvider = ({ customer, children }) => {
  return (
    <CustomerContext.Provider value={customer}>
      {children}
    </CustomerContext.Provider>
  );
};
