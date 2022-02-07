import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { Provider } from "react-redux"
import store from "./state/store"

import Layout from './components/common/layout'
import RiskProfilerPage from './pages/riskProfiler'
import PortfolioAdvisorPage from './pages/portfolioAdvisor'

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/riskProfiler" />} />
            <Route path="riskProfiler" element={<RiskProfilerPage />} />
            <Route path="portfolioAdvisor" element={<PortfolioAdvisorPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
