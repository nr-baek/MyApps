import React from "react";

const PortfolioContext = React.createContext({ prefix: "" });

interface Props {
  children: React.ReactNode;
  prefix: string;
}

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
