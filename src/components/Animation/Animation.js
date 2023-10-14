import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BoltIcon from '@mui/icons-material/Bolt';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ShieldIcon from '@mui/icons-material/Shield';

function ShippingListItem({ Icon, text, isLast }) {
    return (
        <li className={`relative text-center ${isLast ? '' : 'border-r border-gray-300'}`}>
            <div className="w-20 h-20 bg-[#7d7272] rounded-full mx-auto flex items-center justify-center">
                <Icon className="w-7 h-7 text-white" />
            </div>
            <div className="mt-4 font-semibold text-sm">
                <span>{text}</span>
            </div>
        </li>
    );
};

export default function ShippingSection() {
    const icons = [
        { Icon: LocalShippingIcon, text: 'Livraison en 48h' },
        { Icon: ShieldIcon, text: 'Paiement sécurisé' },
        { Icon: BoltIcon, text: 'Livraison rapide' },
        { Icon: HandshakeIcon, text: 'Service client' }
    ];

    return (
        <section id="shipping" data-section>
            <div className="max-w-screen-xl mx-auto">
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {icons.map((item, index) => (
                        <ShippingListItem key={index} Icon={item.Icon} text={item.text} isLast={index === icons.length - 1} />
                    ))}
                </ul>
            </div>
        </section>
    );
};