
import React from 'react';

const LeafIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const TransactionIcon = ({ type }: { type: 'buy' | 'sell' }) => {
    const color = type === 'buy' ? 'text-green-400' : 'text-red-400';
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {type === 'buy'
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            }
        </svg>
    )
};


const Dashboard: React.FC = () => {
    const transactions = [
        { id: 1, type: 'buy', amount: '5.2 ICT', value: '$26.00', date: '2 days ago' },
        { id: 2, type: 'sell', amount: '2.0 ICT', value: '$10.50', date: '5 days ago' },
        { id: 3, type: 'buy', amount: '10.0 ICT', value: '$49.00', date: '1 week ago' },
    ];

    return (
        <div className="space-y-8 py-6 animate-fadeIn">
            <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 text-center">
                <h2 className="text-sm font-medium text-gray-400">Total iCarbon Balance</h2>
                <p className="text-4xl font-bold text-green-400 mt-2">1,250.75 ICT</p>
                <p className="text-md text-gray-300 mt-1">~ $6,253.75 USD</p>
                <div className="mt-4 flex items-center justify-center space-x-2 text-green-300">
                    <LeafIcon className="w-5 h-5" />
                    <p className="text-sm">Equivalent to 12.5 tons of CO₂ offset</p>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Recent Transactions</h3>
                <div className="space-y-4">
                    {transactions.map(tx => (
                        <div key={tx.id} className="flex items-center justify-between bg-gray-900 p-4 rounded-lg">
                            <div className="flex items-center space-x-4">
                                <TransactionIcon type={tx.type as 'buy' | 'sell'} />
                                <div>
                                    <p className="font-semibold capitalize">{tx.type} iCarbon</p>
                                    <p className="text-sm text-gray-400">{tx.date}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className={`font-semibold ${tx.type === 'buy' ? 'text-green-400' : 'text-red-400'}`}>{tx.amount}</p>
                                <p className="text-sm text-gray-400">{tx.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
