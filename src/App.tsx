import React, { useEffect, lazy } from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import { ResetCSS } from "@pancakeswap-libs/uikit";
import BigNumber from "bignumber.js";
import useEagerConnect from "hooks/useEagerConnect";
import {
  useFetchPriceList,
  useFetchProfile,
  useFetchPublicData,
} from "state/hooks";
import useGetDocumentTitlePrice from "./hooks/useGetDocumentTitlePrice";
import GlobalStyle from "./style/Global";
import Menu from "./components/Menu";
import SuspenseWithChunkError from "./components/SuspenseWithChunkError";
import ToastListener from "./components/ToastListener";
import PageLoader from "./components/PageLoader";
// import EasterEgg from './components/EasterEgg'
import Pools from "./views/Pools";
import Pools1 from "./views/Pools1";
import GlobalCheckBullHiccupClaimStatus from "./views/Collectibles/components/GlobalCheckBullHiccupClaimStatus";
import history from "./routerHistory";

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import("./views/Home"));
const Farms = lazy(() => import("./views/Farms"));
const Lottery = lazy(() => import("./views/Lottery"));
const NotFound = lazy(() => import("./views/NotFound"));

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

const App: React.FC = () => {
  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
  useEffect(() => {
    console.warn = () => null;
  }, []);

  useEagerConnect();
  useFetchPublicData();
  useFetchProfile();
  useFetchPriceList();
  useGetDocumentTitlePrice();

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <SuspenseWithChunkError fallback={<> </>}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/bigsmall">
              <Pools1 />
            </Route>
            <Route path="/niuniu">
              <Pools />
            </Route>
            <Route path="/sports">
              <Farms />
            </Route>
            {/* <Route path="/ifo">
              <Ifos />
            </Route>
            <Route path="/collectibles">
              <Collectibles />
            </Route>
            <Route exact path="/teams">
              <Teams />
            </Route>
            <Route path="/teams/:id">
              <Team />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route> */}
            {/* Redirect */}

            <Route path="/staking">
              <Redirect to="/pools" />
            </Route>
            <Route path="/syrup">
              <Redirect to="/pools" />
            </Route>
            {/* <Route path="/nft">
              <Redirect to="/collectibles" />
            </Route> */}
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>
      </Menu>
      {/* <EasterEgg iterations={2} /> */}
      <ToastListener />
      <GlobalCheckBullHiccupClaimStatus />
    </Router>
  );
};

export default React.memo(App);
