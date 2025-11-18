
import React from 'react';
import PerformanceChart from '../components/PerformanceChart';
import { CryptoData } from '../types';

const cryptoData: CryptoData[] = [
    { name: 'iCarbon', ticker: 'ICT', price: 5.12, change24h: 3.5, marketCap: '$50M', logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzRBREU4MCI+PHBhdGggZD0iTTkgMTJsMiAyIDQtNG02IDJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6Ii8+PC9zdmc+' },
    { name: 'Bitcoin', ticker: 'BTC', price: 65432.10, change24h: -1.2, marketCap: '$1.3T', logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0ZCQkYyNCI+PHBhdGggZD0iTTEyIDJhMTAgMTAgMCAxMDAtMjAgMTAgMTAgMCAwMDAgMjB6TTExIDdoMnYzaDJ2MmgtMnYzaC0ydjJoMnYzaDJ2MmgtMnYtM2gtMnYtMmgydi0zaC0ydi0yaDJ2M2gyVjdoLTJ6Ii8+PC9zdmc+' },
    { name: 'Ethereum', ticker: 'ETH', price: 3456.78, change24h: 0.8, marketCap: '$415B', logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzYwQTJGQSI+PHBhdGggZD0iTTEyIDNsNyA5LTcgNS03LTUgNy05em0wIDEwLjVMNy41IDEybDQuNS0yLjUgNC41IDIuNUwxMiAxMy41ek0xMiAxNS41bDUgMi41TDcgMThsNS0yLjV6Ii8+PC9zdmc+' },
];

const OpenFinance: React.FC = () => {
    return (
        <div className="space-y-8 py-6">
            <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Performance Overview</h3>
                <PerformanceChart />
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Market Comparison</h3>
                <div className="space-y-3">
                    {cryptoData.map((crypto) => (
                        <div key={crypto.ticker} className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <img src={crypto.logo} alt={crypto.name} className="w-10 h-10 rounded-full" />
                                <div>
                                    <p className="font-bold text-lg">{crypto.name}</p>
                                    <p className="text-sm text-gray-400">{crypto.ticker}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">${crypto.price.toLocaleString()}</p>
                                <p className={`text-sm ${crypto.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                    {crypto.change24h > 0 ? '+' : ''}{crypto.change24h}%
                                </p>
                            </div>
                             <div className="text-right hidden sm:block">
                                <p className="font-semibold text-gray-400">Market Cap</p>
                                <p className="text-sm text-gray-300">{crypto.marketCap}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OpenFinance;
