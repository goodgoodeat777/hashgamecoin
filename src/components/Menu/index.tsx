import React, { useContext, useEffect, useState } from "react";
import { Menu as UikitMenu } from "@pancakeswap-libs/uikit";
import { useWeb3React } from "@web3-react/core";
import { languageList } from "config/localization/languages";
import { useTranslation } from "contexts/Localization";
import {
  LangType,
  LanguageContext,
} from "contexts/Localization/languageContext"; // old
import useTheme from "hooks/useTheme";
import useAuth from "hooks/useAuth";
import { usePriceCakeBusd, usePriceBnbBusd, useProfile } from "state/hooks";
import config from "./config";

const Menu = (props) => {
  const { account } = useWeb3React();
  const { login, logout } = useAuth();
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext); // old translate
  const { isDark, toggleTheme } = useTheme();
  const cakePriceUsd = usePriceCakeBusd();
  const BnbPriceUsd = usePriceBnbBusd();
  const { profile } = useProfile();
  const { currentLanguage, setLanguage, t } = useTranslation(); // new translate

  return (
    <UikitMenu
      account={account}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      // currentLang={selectedLanguage && selectedLanguage.code} // old translate
      // setLang={setSelectedLanguage} // old translate
      // langs={allLanguages}

      currentLang={currentLanguage.code} // new
      langs={languageList} // new
      setLang={setLanguage} // new
      cakePriceUsd={cakePriceUsd.toNumber()}
      // links={config} // old translate
      links={config(t)} // new translate
      // profile={{
      //   username: profile?.username,
      //   image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
      //   profileLink: '/profile',
      //   noProfileLink: '/profile',
      //   showPip: !profile?.username,
      // }}
      {...props}
    />
  );
};

export default Menu;
