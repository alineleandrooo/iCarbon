
import React from 'react';

export type View = 'Dashboard' | 'OpenFinance' | 'Investments' | 'Profile';

export interface NavItem {
  id: string;
  label: string;
  icon: (props: { className?: string }) => React.ReactElement;
  view: View;
}

export interface CryptoData {
  name: string;
  ticker: string;
  price: number;
  change24h: number;
  marketCap: string;
  logo: string;
}

export interface InvestmentProject {
  id: string;
  name: string;
  type: string;
  invested: number;
  returnPercentage: number;
  imageUrl: string;
}
