import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PortfolioAdvisor from "../components/portfolioAdvisor"

export default function PortfolioAdvisorPage () {

  const { riskLevel } = useSelector((store) => store.financialAdvisor);

  let navigate = useNavigate();

  useEffect(()=>{
    if(!riskLevel){
      navigate('/riskProfiler');
    }
  });

  return (
    <>
      {riskLevel>0 && 
        <PortfolioAdvisor/>
      }
    </>
  )
}