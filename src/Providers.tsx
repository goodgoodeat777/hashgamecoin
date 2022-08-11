import React from "react";
import { ModalProvider } from "@pancakeswap-libs/uikit";
import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from "react-redux";
import { getLibrary } from "utils/web3React";
import { LanguageProvider } from "contexts/Localization"; // new
import { LanguageContextProvider } from "contexts/Localization/languageContext"; // old
import { ThemeContextProvider } from "contexts/ThemeContext";
import { RefreshContextProvider } from "contexts/RefreshContext";
import store from "state";

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ThemeContextProvider>
          {/* <LanguageContextProvider> old */}
          <LanguageProvider>
            <RefreshContextProvider>
              <ModalProvider>{children}</ModalProvider>
            </RefreshContextProvider>
          </LanguageProvider>
          {/* </LanguageContextProvider>  old */}
        </ThemeContextProvider>
      </Provider>
    </Web3ReactProvider>
  );
};

export default Providers;
