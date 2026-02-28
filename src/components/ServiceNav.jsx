import { Link, useLocation } from 'react-router-dom';
import { Building2, Hammer, Home, Wrench, ChevronLeft } from 'lucide-react';

const services = [
    { path: '/services', label: 'Thiết Kế Kiến Trúc', icon: Building2 },
    { path: '/thi-cong', label: 'Thi Công Trọn Gói', icon: Hammer },
    { path: '/noi-that', label: 'Nội Thất May Đo', icon: Home },
    { path: '/cai-tao', label: 'Cải Tạo & Sửa Chữa', icon: Wrench },
];

export default function ServiceNav() {
    const location = useLocation();

    return (
        <div className="bg-secondary border-b border-bordercolor">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
                    {/* Nút về trang chủ */}
                    <Link
                        to="/"
                        className="shrink-0 flex items-center gap-1 px-4 py-4 text-textmuted hover:text-accent text-xs font-bold uppercase tracking-wider transition-colors border-r border-bordercolor mr-2"
                    >
                        <ChevronLeft className="w-3.5 h-3.5" />
                        Trang Chủ
                    </Link>

                    {/* Các tab dịch vụ */}
                    {services.map((svc) => {
                        const Icon = svc.icon;
                        const isActive = location.pathname === svc.path;
                        return (
                            <Link
                                key={svc.path}
                                to={svc.path}
                                className={`shrink-0 flex items-center gap-2 px-4 py-4 text-xs font-bold uppercase tracking-wider transition-colors relative
                                    ${isActive
                                        ? 'text-accent'
                                        : 'text-textmuted hover:text-white'
                                    }`}
                            >
                                <Icon className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">{svc.label}</span>
                                {isActive && (
                                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent"></span>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
