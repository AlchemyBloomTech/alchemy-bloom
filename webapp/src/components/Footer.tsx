import React from 'react';

const Footer: React.FC = () => (
     <footer className="border-t border-gray-200 py-4 mt-10 bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 text-gray-600">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Alchemy inBloom. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;