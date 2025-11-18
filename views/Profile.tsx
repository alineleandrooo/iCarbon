import React from 'react';

const Profile: React.FC = () => {
    const user = {
        name: 'Aline Leandro',
        email: 'aline.leandro@icarbon.app',
        avatar: 'AL',
        walletAddress: '0x1234...AbCd'
    };
    
    const settings = ['Notifications', 'Security', 'Language', 'Help & Support'];

    return (
        <div className="space-y-8 py-6">
            <div className="flex flex-col items-center space-y-2">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-black">{user.avatar}</span>
                </div>
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-gray-400">{user.email}</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-200 mb-3">Wallet Information</h3>
                <div className="bg-gray-800 p-4 rounded-md">
                    <p className="text-sm text-gray-400">Wallet Address</p>
                    <p className="font-mono text-green-400 break-all">{user.walletAddress}</p>
                </div>
                <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    View on Explorer
                </button>
            </div>
            
            <div className="bg-gray-900 rounded-lg">
                 <h3 className="text-lg font-semibold text-gray-200 p-4 border-b border-gray-700">Settings</h3>
                 <div className="divide-y divide-gray-700">
                    {settings.map(setting => (
                         <button key={setting} className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-800 transition-colors">
                            <span>{setting}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                         </button>
                    ))}
                 </div>
            </div>

            <button className="w-full bg-red-600/50 hover:bg-red-600/70 text-red-100 font-bold py-3 px-4 rounded-lg transition-colors">
                Logout
            </button>
        </div>
    );
};

export default Profile;