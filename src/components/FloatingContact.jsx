import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
    return (
        <div className="fixed right-6 bottom-12 md:bottom-24 z-[90] flex flex-col gap-4">
            {/* Zalo */}
            <a
                href="https://zalo.me/0858651818"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 relative group border-2 border-[#128C7E]"
            >
                <span className="font-bold text-[#128C7E] text-[10px] md:text-sm">Zalo</span>
                <span className="absolute right-full mr-4 bg-black text-white px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Chat Zalo
                </span>
            </a>

            {/* Messenger */}
            <a
                href="https://m.me/..."
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-[#0084FF] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 relative group"
            >
                <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
                <span className="absolute right-full mr-4 bg-black text-white px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Messenger
                </span>
            </a>

            {/* Hotline */}
            <a
                href="tel:0858651818"
                className="w-12 h-12 md:w-14 md:h-14 bg-[#eb6115] rounded-full flex items-center justify-center shadow-lg shadow-[#eb6115]/40 hover:scale-110 transition-transform duration-300 relative group animate-bounce"
                style={{ animationDuration: '3s' }}
            >
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-white animate-pulse" />
                <span className="absolute right-full mr-4 bg-[#eb6115] text-white font-bold px-3 py-1 rounded text-xs md:text-sm whitespace-nowrap shadow-lg">
                    Hotline: 085.865.1818
                </span>
            </a>
        </div>
    );
}
