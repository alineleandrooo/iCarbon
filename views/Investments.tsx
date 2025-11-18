
import React from 'react';
import { InvestmentProject } from '../types';

const investmentData: InvestmentProject[] = [
    { id: '1', name: 'Amazon Reforestation', type: 'Forestry', invested: 5000, returnPercentage: 12.5, imageUrl: 'https://picsum.photos/seed/forest/400/200' },
    { id: '2', name: 'African Solar Farm', type: 'Renewable Energy', invested: 12000, returnPercentage: 8.2, imageUrl: 'https://picsum.photos/seed/solar/400/200' },
    { id: '3', name: 'India Wind Turbines', type: 'Renewable Energy', invested: 7500, returnPercentage: 9.8, imageUrl: 'https://picsum.photos/seed/wind/400/200' },
    { id: '4', name: 'Methane Capture Project', type: 'Waste Management', invested: 3200, returnPercentage: 15.1, imageUrl: 'https://picsum.photos/seed/methane/400/200' },
];

const InvestmentCard: React.FC<{ project: InvestmentProject }> = ({ project }) => (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <img src={project.imageUrl} alt={project.name} className="w-full h-32 object-cover" />
        <div className="p-4">
            <p className="text-xs text-green-400 font-semibold uppercase">{project.type}</p>
            <h4 className="text-lg font-bold mt-1">{project.name}</h4>
            <div className="flex justify-between items-baseline mt-4">
                <div>
                    <p className="text-sm text-gray-400">Invested</p>
                    <p className="font-semibold">${project.invested.toLocaleString()}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-400">Est. Return</p>
                    <p className="font-semibold text-green-400">{project.returnPercentage}%</p>
                </div>
            </div>
        </div>
    </div>
);


const Investments: React.FC = () => {
    return (
        <div className="space-y-8 py-6">
            <div className="bg-gray-900 rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                <div>
                    <p className="text-sm text-gray-400">Total Invested</p>
                    <p className="text-xl font-bold text-white">$27,700</p>
                </div>
                <div>
                    <p className="text-sm text-gray-400">Portfolio Gain</p>
                    <p className="text-xl font-bold text-green-400">+$2,845</p>
                </div>
                 <div className="col-span-2 sm:col-span-1">
                    <p className="text-sm text-gray-400">Lifetime CO₂ Offset</p>
                    <p className="text-xl font-bold text-white">45.8 tons</p>
                </div>
            </div>
            
            <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-200">My Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {investmentData.map(project => (
                       <InvestmentCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Investments;
