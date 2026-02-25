import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass, User, Ruler } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';

/* ===== PHONG THỦY DATA ===== */
const M24 = [
    { n: "Tý", d: 0, e: "Thủy", g: "Khảm" }, { n: "Quý", d: 15, e: "Thủy", g: "Khảm" },
    { n: "Sửu", d: 30, e: "Thổ", g: "Cấn" }, { n: "Cấn", d: 45, e: "Thổ", g: "Cấn" },
    { n: "Dần", d: 60, e: "Mộc", g: "Cấn" }, { n: "Giáp", d: 75, e: "Mộc", g: "Chấn" },
    { n: "Mão", d: 90, e: "Mộc", g: "Chấn" }, { n: "Ất", d: 105, e: "Mộc", g: "Chấn" },
    { n: "Thìn", d: 120, e: "Thổ", g: "Tốn" }, { n: "Tốn", d: 135, e: "Mộc", g: "Tốn" },
    { n: "Tỵ", d: 150, e: "Hỏa", g: "Tốn" }, { n: "Bính", d: 165, e: "Hỏa", g: "Ly" },
    { n: "Ngọ", d: 180, e: "Hỏa", g: "Ly" }, { n: "Đinh", d: 195, e: "Hỏa", g: "Ly" },
    { n: "Mùi", d: 210, e: "Thổ", g: "Khôn" }, { n: "Khôn", d: 225, e: "Thổ", g: "Khôn" },
    { n: "Thân", d: 240, e: "Kim", g: "Khôn" }, { n: "Canh", d: 255, e: "Kim", g: "Đoài" },
    { n: "Dậu", d: 270, e: "Kim", g: "Đoài" }, { n: "Tân", d: 285, e: "Kim", g: "Đoài" },
    { n: "Tuất", d: 300, e: "Thổ", g: "Càn" }, { n: "Càn", d: 315, e: "Kim", g: "Càn" },
    { n: "Hợi", d: 330, e: "Thủy", g: "Càn" }, { n: "Nhâm", d: 345, e: "Thủy", g: "Khảm" }
];
const T8 = [
    { n: "Khảm", d: 0 }, { n: "Cấn", d: 45 }, { n: "Chấn", d: 90 }, { n: "Tốn", d: 135 },
    { n: "Ly", d: 180 }, { n: "Khôn", d: 225 }, { n: "Đoài", d: 270 }, { n: "Càn", d: 315 }
];
const guaDesc = {
    "Khảm": "Hướng Khảm (Bắc) thuộc Thủy. Tượng trưng cho trí tuệ, sự mềm mỏng nhưng sâu sắc. Phù hợp mệnh Đông Tứ Trạch.",
    "Cấn": "Hướng Cấn (Đông Bắc) thuộc Thổ. Tượng trưng cho núi, sự tĩnh lặng, tích lũy tài sản.",
    "Chấn": "Hướng Chấn (Đông) thuộc Mộc. Tượng trưng cho sấm, phát triển mạnh mẽ, vươn lên.",
    "Tốn": "Hướng Tốn (Đông Nam) thuộc Mộc. Tượng trưng cho gió, sự uyển chuyển, tài lộc lan tỏa.",
    "Ly": "Hướng Ly (Nam) thuộc Hỏa. Tượng trưng cho ánh sáng, danh vọng, sự rực rỡ.",
    "Khôn": "Hướng Khôn (Tây Nam) thuộc Thổ. Tượng trưng cho đất, sự bao dung nuôi dưỡng.",
    "Đoài": "Hướng Đoài (Tây) thuộc Kim. Tượng trưng cho đầm, vui vẻ, giao tiếp tốt.",
    "Càn": "Hướng Càn (Tây Bắc) thuộc Kim. Tượng trưng cho trời, quyền lực, lãnh đạo."
};
const guaGood = {
    "Khảm": "Đông Nam (Sinh Khí)", "Cấn": "Tây Nam (Sinh Khí)", "Chấn": "Nam (Sinh Khí)", "Tốn": "Bắc (Sinh Khí)",
    "Ly": "Đông (Sinh Khí)", "Khôn": "Đông Bắc (Sinh Khí)", "Đoài": "Tây Bắc (Sinh Khí)", "Càn": "Tây (Sinh Khí)"
};
const elemColor = { "Thủy": "#3b82f6", "Mộc": "#22c55e", "Hỏa": "#ef4444", "Thổ": "#eab308", "Kim": "#d1d5db" };

const kuaInfo = {
    1: { name: "Khảm", elem: "Thủy", group: "Đông Tứ Trạch", good: ["Đông Nam (Sinh Khí)", "Đông (Thiên Y)", "Nam (Diên Niên)", "Bắc (Phục Vị)"], bad: ["Tây Bắc (Họa Hại)", "Tây (Lục Sát)", "Đông Bắc (Ngũ Quỷ)", "Tây Nam (Tuyệt Mệnh)"] },
    2: { name: "Khôn", elem: "Thổ", group: "Tây Tứ Trạch", good: ["Đông Bắc (Sinh Khí)", "Tây (Thiên Y)", "Tây Bắc (Diên Niên)", "Tây Nam (Phục Vị)"], bad: ["Đông (Họa Hại)", "Đông Nam (Lục Sát)", "Nam (Ngũ Quỷ)", "Bắc (Tuyệt Mệnh)"] },
    3: { name: "Chấn", elem: "Mộc", group: "Đông Tứ Trạch", good: ["Nam (Sinh Khí)", "Bắc (Thiên Y)", "Đông Nam (Diên Niên)", "Đông (Phục Vị)"], bad: ["Tây Nam (Họa Hại)", "Đông Bắc (Lục Sát)", "Tây Bắc (Ngũ Quỷ)", "Tây (Tuyệt Mệnh)"] },
    4: { name: "Tốn", elem: "Mộc", group: "Đông Tứ Trạch", good: ["Bắc (Sinh Khí)", "Nam (Thiên Y)", "Đông (Diên Niên)", "Đông Nam (Phục Vị)"], bad: ["Đông Bắc (Họa Hại)", "Tây Nam (Lục Sát)", "Tây (Ngũ Quỷ)", "Tây Bắc (Tuyệt Mệnh)"] },
    6: { name: "Càn", elem: "Kim", group: "Tây Tứ Trạch", good: ["Tây (Sinh Khí)", "Đông Bắc (Thiên Y)", "Tây Nam (Diên Niên)", "Tây Bắc (Phục Vị)"], bad: ["Đông Nam (Họa Hại)", "Đông (Lục Sát)", "Bắc (Ngũ Quỷ)", "Nam (Tuyệt Mệnh)"] },
    7: { name: "Đoài", elem: "Kim", group: "Tây Tứ Trạch", good: ["Tây Bắc (Sinh Khí)", "Tây Nam (Thiên Y)", "Đông Bắc (Diên Niên)", "Tây (Phục Vị)"], bad: ["Nam (Họa Hại)", "Bắc (Lục Sát)", "Đông (Ngũ Quỷ)", "Đông Nam (Tuyệt Mệnh)"] },
    8: { name: "Cấn", elem: "Thổ", group: "Tây Tứ Trạch", good: ["Tây Nam (Sinh Khí)", "Tây Bắc (Thiên Y)", "Tây (Diên Niên)", "Đông Bắc (Phục Vị)"], bad: ["Bắc (Họa Hại)", "Nam (Lục Sát)", "Đông Nam (Ngũ Quỷ)", "Đông (Tuyệt Mệnh)"] },
    9: { name: "Ly", elem: "Hỏa", group: "Đông Tứ Trạch", good: ["Đông (Sinh Khí)", "Đông Nam (Thiên Y)", "Bắc (Diên Niên)", "Nam (Phục Vị)"], bad: ["Tây (Họa Hại)", "Tây Bắc (Lục Sát)", "Tây Nam (Ngũ Quỷ)", "Đông Bắc (Tuyệt Mệnh)"] }
};

const LB = [
    { name: "Tài", good: true, sub: ["Tài Đức", "Bảo Khố", "Lục Hợp", "Nghinh Phúc"] },
    { name: "Bệnh", good: false, sub: ["Thoái Tài", "Công Sự", "Lao Chấp", "Cô Quả"] },
    { name: "Ly", good: false, sub: ["Trưởng Khố", "Kiếp Tài", "Quan Quỷ", "Thất Thoát"] },
    { name: "Nghĩa", good: true, sub: ["Thiêm Đinh", "Ích Lợi", "Quý Tử", "Đại Cát"] },
    { name: "Quan", good: true, sub: ["Thuận Khoa", "Hoạch Tài", "Tấn Ích", "Phú Quý"] },
    { name: "Kiếp", good: false, sub: ["Tử Biệt", "Thoái Khẩu", "Ly Hương", "Tài Thất"] },
    { name: "Hại", good: false, sub: ["Tai Chí", "Tử Tuyệt", "Bệnh Lâm", "Khẩu Thiệt"] },
    { name: "Bản", good: true, sub: ["Tài Chí", "Đăng Khoa", "Tấn Bảo", "Hưng Vượng"] }
];
const CYCLE = 43.2;

function getLB(cm) {
    const pos = ((cm % CYCLE) + CYCLE) % CYCLE;
    const segSize = CYCLE / 8;
    const idx = Math.floor(pos / segSize);
    const subSize = segSize / 4;
    const subIdx = Math.floor((pos % segSize) / subSize);
    return { ...LB[idx], subName: LB[idx].sub[subIdx], pos };
}

function findGood(cm) {
    const results = [];
    for (let delta = 1; delta <= 15; delta++) {
        [cm - delta, cm + delta].forEach(v => {
            if (v > 0 && getLB(v).good && results.length < 4) results.push(Math.round(v * 10) / 10);
        });
        if (results.length >= 4) break;
    }
    return results.slice(0, 4);
}

function getClosestMountain(deg) {
    let nd = Math.round((360 - deg % 360 + 360) % 360) % 360;
    let best = M24[0], bDiff = 360;
    M24.forEach(m => { let df = Math.abs(nd - m.d); if (df > 180) df = 360 - df; if (df < bDiff) { bDiff = df; best = m; } });
    return { ...best, deg: nd };
}

/* ===== COMPASS COMPONENT ===== */
function CompassTab() {
    const [rotation, setRotation] = useState(0);
    const lpRef = useRef(null);
    const dragging = useRef(false);
    const sAngle = useRef(0);
    const sRot = useRef(0);

    const info = getClosestMountain(rotation);

    const getAngle = useCallback((e) => {
        const r = lpRef.current.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const px = e.touches ? e.touches[0].clientX : e.clientX;
        const py = e.touches ? e.touches[0].clientY : e.clientY;
        return Math.atan2(py - cy, px - cx) * 180 / Math.PI;
    }, []);

    useEffect(() => {
        const onMove = (e) => {
            if (!dragging.current) return;
            const newRot = sRot.current + (getAngle(e) - sAngle.current);
            setRotation(newRot);
        };
        const onUp = () => { dragging.current = false; };
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
        window.addEventListener('touchmove', onMove, { passive: false });
        window.addEventListener('touchend', onUp);
        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
            window.removeEventListener('touchmove', onMove);
            window.removeEventListener('touchend', onUp);
        };
    }, [getAngle]);

    const onDown = (e) => {
        e.preventDefault();
        dragging.current = true;
        sAngle.current = getAngle(e);
        sRot.current = rotation;
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col items-center">
                {/* Compass */}
                <div className="relative w-full max-w-[400px] aspect-square">
                    <div className="absolute top-[-28px] left-1/2 -translate-x-1/2 text-red-500 font-bold text-sm z-20">{info.deg}°</div>
                    <div className="absolute top-0 left-1/2 w-[1px] h-full bg-red-500/50 -translate-x-1/2 z-20 pointer-events-none" />
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-500/50 -translate-y-1/2 z-20 pointer-events-none" />
                    <div
                        ref={lpRef}
                        className="w-full h-full rounded-full cursor-grab active:cursor-grabbing"
                        style={{
                            background: 'radial-gradient(circle, #c9a730, #b8942a 60%, #8b6914)',
                            border: '3px solid #705a10',
                            boxShadow: '0 0 40px rgba(212,175,55,.15), inset 0 0 30px rgba(0,0,0,.5)',
                            transform: `rotate(${rotation}deg)`,
                            transition: dragging.current ? 'none' : 'transform .08s ease-out',
                            position: 'relative'
                        }}
                        onMouseDown={onDown}
                        onTouchStart={onDown}
                    >
                        {/* Center + Needle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[14%] h-[14%] bg-[#111] rounded-full border-2 border-[#8b6508] z-10">
                            <div className="absolute top-[12%] left-1/2 w-[2px] h-[76%] -translate-x-1/2 z-[11]"
                                style={{ background: 'linear-gradient(#ef4444 50%, #d1d5db 50%)' }} />
                        </div>
                        {/* 8 Trigrams Ring */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[58%] h-[58%] rounded-full border border-black/25">
                            {T8.map((t) => (
                                <div key={t.n} className="absolute top-0 left-1/2 w-[2px] h-1/2 origin-bottom" style={{ transform: `rotate(${t.d}deg)` }}>
                                    <div className="absolute w-[2px] h-full left-1/2 bg-black/35" />
                                    <div className="absolute top-[6px] left-1/2 -translate-x-1/2 text-sm font-bold text-red-900 whitespace-nowrap">{t.n}</div>
                                </div>
                            ))}
                        </div>
                        {/* 24 Mountains Ring */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[86%] h-[86%] rounded-full border border-black/25">
                            {M24.map((m) => (
                                <div key={m.n} className="absolute top-0 left-1/2 w-[2px] h-1/2 origin-bottom" style={{ transform: `rotate(${m.d}deg)` }}>
                                    <div className="absolute w-[1px] h-full left-1/2 bg-black/20" />
                                    <div className="absolute top-[4px] left-1/2 -translate-x-1/2 text-[11px] font-semibold whitespace-nowrap"
                                        style={{ color: m.e === 'Thủy' ? '#1e3a8a' : m.e === 'Mộc' ? '#14532d' : m.e === 'Hỏa' ? '#7f1d1d' : m.e === 'Thổ' ? '#713f12' : '#374151' }}>
                                        {m.n}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="text-textmuted text-sm mt-4 text-center">Kéo chuột / cảm ứng để xoay la bàn</p>
            </div>
            {/* Info Panel */}
            <div className="space-y-4">
                <div className="bg-secondary border border-bordercolor p-6">
                    <h3 className="text-accent font-bold mb-4">Hướng: <span className="text-textmain">{info.g} ({info.deg}°)</span></h3>
                    <div className="grid grid-cols-2 gap-3">
                        <InfoBox label="Sơn (24 Sơn)" value={info.n} />
                        <InfoBox label="Ngũ Hành" value={info.e} color={elemColor[info.e]} />
                        <InfoBox label="Quái" value={info.g} />
                        <InfoBox label="Cung tốt" value={guaGood[info.g]} color="#eab308" />
                    </div>
                </div>
                <div className="bg-secondary border border-bordercolor p-6">
                    <h3 className="text-accent font-bold mb-2">Luận giải</h3>
                    <p className="text-textmuted text-sm leading-relaxed">{guaDesc[info.g]}</p>
                </div>
            </div>
        </div>
    );
}

/* ===== KUA / CUNG MỆNH COMPONENT ===== */
function KuaTab() {
    const [year, setYear] = useState(1990);
    const [gender, setGender] = useState('male');
    const [result, setResult] = useState(null);

    const calc = () => {
        if (isNaN(year) || year < 1930 || year > 2030) return;
        // Helper: reduce a number to single digit by summing digits
        const reduce = (n) => { while (n > 9) { let t = 0; let v = n; while (v > 0) { t += v % 10; v = Math.floor(v / 10); } n = t; } return n; };
        const digitSum = reduce(year);
        let kua;
        if (gender === 'male') {
            kua = year < 2000 ? (11 - digitSum) : (9 - digitSum);
            if (kua <= 0) kua += 9;
            if (kua > 9) kua = reduce(kua);
            if (kua === 5) kua = 2;
        } else {
            kua = year < 2000 ? (digitSum + 4) : (digitSum + 6);
            if (kua > 9) kua = reduce(kua);
            if (kua === 5) kua = 8;
        }
        const k = kuaInfo[kua];
        if (!k) return;
        setResult({ kua, ...k, year, gender });
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-secondary border border-bordercolor p-6">
                <h3 className="text-accent font-bold mb-4">Nhập thông tin gia chủ</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs text-textmuted mb-1">Năm sinh (Dương lịch)</label>
                        <input type="number" min="1930" max="2030" value={year} onChange={e => setYear(parseInt(e.target.value))}
                            className="w-full bg-primary border border-bordercolor px-4 py-3 text-textmain focus:border-accent focus:outline-none" />
                    </div>
                    <div>
                        <label className="block text-xs text-textmuted mb-1">Giới tính</label>
                        <select value={gender} onChange={e => setGender(e.target.value)}
                            className="w-full bg-primary border border-bordercolor px-4 py-3 text-textmain focus:border-accent focus:outline-none">
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                        </select>
                    </div>
                    <button onClick={calc}
                        className="w-full bg-accent text-primary font-bold py-3 text-sm uppercase tracking-widest hover:bg-yellow-400 transition-colors">
                        Xem Cung Mệnh
                    </button>
                </div>
            </div>
            <div className="space-y-4">
                {!result ? (
                    <div className="bg-secondary border border-bordercolor p-6">
                        <p className="text-textmuted text-sm">Nhập năm sinh và nhấn "Xem Cung Mệnh" để xem kết quả.</p>
                    </div>
                ) : (
                    <>
                        <div className="bg-secondary border border-bordercolor p-6">
                            <h3 className="text-accent font-bold mb-3">Cung Mệnh: <span style={{ color: elemColor[result.elem] }}>{result.name} (Số {result.kua})</span></h3>
                            <div className="grid grid-cols-2 gap-3">
                                <InfoBox label="Ngũ Hành" value={result.elem} color={elemColor[result.elem]} />
                                <InfoBox label="Nhóm" value={result.group} color="#eab308" />
                                <InfoBox label="Năm sinh" value={result.year} />
                                <InfoBox label="Giới tính" value={result.gender === 'male' ? 'Nam' : 'Nữ'} />
                            </div>
                        </div>
                        <div className="bg-secondary border border-bordercolor p-6">
                            <h3 className="text-green-400 font-bold mb-3">✅ 4 Hướng Tốt</h3>
                            {result.good.map(g => (
                                <div key={g} className="bg-primary border-l-[3px] border-green-700 px-4 py-2 mb-2 text-green-400 font-semibold text-sm">{g}</div>
                            ))}
                        </div>
                        <div className="bg-secondary border border-bordercolor p-6">
                            <h3 className="text-red-400 font-bold mb-3">⛔ 4 Hướng Xấu</h3>
                            {result.bad.map(b => (
                                <div key={b} className="bg-primary border-l-[3px] border-red-800 px-4 py-2 mb-2 text-red-400 font-semibold text-sm">{b}</div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

/* ===== LỖ BAN RULER COMPONENT ===== */
function RulerTab() {
    const [sizeType, setSizeType] = useState('door');
    const [w, setW] = useState(86);
    const [h, setH] = useState(210);
    const [result, setResult] = useState(null);

    const typeLabels = { door: 'Cửa chính', window: 'Cửa sổ', bed: 'Giường ngủ', desk: 'Bàn làm việc', other: 'Khác' };

    const calc = () => {
        if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) return;
        setResult({ w, h, rw: getLB(w), rh: getLB(h), type: typeLabels[sizeType] });
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-secondary border border-bordercolor p-6">
                <h3 className="text-accent font-bold mb-4">Nhập kích thước</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs text-textmuted mb-1">Loại</label>
                        <select value={sizeType} onChange={e => setSizeType(e.target.value)}
                            className="w-full bg-primary border border-bordercolor px-4 py-3 text-textmain focus:border-accent focus:outline-none">
                            {Object.entries(typeLabels).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                        </select>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-xs text-textmuted mb-1">Chiều rộng (cm)</label>
                            <input type="number" min="1" max="1000" value={w} onChange={e => setW(parseFloat(e.target.value))}
                                className="w-full bg-primary border border-bordercolor px-4 py-3 text-textmain focus:border-accent focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-xs text-textmuted mb-1">Chiều cao (cm)</label>
                            <input type="number" min="1" max="1000" value={h} onChange={e => setH(parseFloat(e.target.value))}
                                className="w-full bg-primary border border-bordercolor px-4 py-3 text-textmain focus:border-accent focus:outline-none" />
                        </div>
                    </div>
                    <button onClick={calc}
                        className="w-full bg-accent text-primary font-bold py-3 text-sm uppercase tracking-widest hover:bg-yellow-400 transition-colors">
                        Tra Thước Lỗ Ban
                    </button>
                </div>
            </div>
            <div className="space-y-4">
                {!result ? (
                    <div className="bg-secondary border border-bordercolor p-6">
                        <p className="text-textmuted text-sm">Nhập kích thước và nhấn "Tra Thước Lỗ Ban".</p>
                    </div>
                ) : (
                    <>
                        <div className="bg-secondary border border-accent p-6">
                            <h3 className="text-accent font-bold">Kết quả tra {result.type}</h3>
                            <p className="text-textmuted text-sm">{result.type} {result.w} × {result.h} cm</p>
                        </div>
                        <RulerResult label="Chiều rộng" cm={result.w} r={result.rw} />
                        <RulerResult label="Chiều cao" cm={result.h} r={result.rh} />
                        {(!result.rw.good || !result.rh.good) && (
                            <div className="bg-secondary border border-bordercolor p-6">
                                <h3 className="text-accent font-bold mb-3">💡 Gợi ý kích thước tốt lân cận</h3>
                                {!result.rw.good && <p className="text-textmuted text-sm mb-1">• Chiều rộng: thử <span className="text-accent font-bold">{findGood(result.w).join(' cm, ')} cm</span></p>}
                                {!result.rh.good && <p className="text-textmuted text-sm">• Chiều cao: thử <span className="text-accent font-bold">{findGood(result.h).join(' cm, ')} cm</span></p>}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

/* ===== SHARED COMPONENTS ===== */
function InfoBox({ label, value, color }) {
    return (
        <div className="bg-primary p-3 border border-bordercolor">
            <div className="text-[11px] text-textmuted mb-1">{label}</div>
            <div className="text-base font-bold" style={color ? { color } : {}}>{value}</div>
        </div>
    );
}

function RulerResult({ label, cm, r }) {
    const pct = ((r.pos / CYCLE) * 100).toFixed(1);
    return (
        <div className="bg-secondary border border-bordercolor p-6">
            <h4 className="text-accent font-bold mb-2">{label}: {cm} cm</h4>
            {/* Visual ruler bar */}
            <div className="flex rounded overflow-hidden h-8 relative mb-3">
                {LB.map((l) => (
                    <div key={l.name} className={`flex-1 flex items-center justify-center text-[10px] font-bold text-white ${l.good ? 'bg-green-800' : 'bg-red-900'}`}>
                        {l.name}
                    </div>
                ))}
                <div className="absolute top-[-6px] h-[44px] w-[2px] bg-accent z-10 transition-all" style={{ left: `${pct}%` }}>
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-accent text-xs">▼</span>
                </div>
            </div>
            <div className={`p-4 border ${r.good ? 'bg-green-950/50 border-green-800 text-green-400' : 'bg-red-950/50 border-red-800 text-red-400'}`}>
                <div className="text-lg font-bold mb-1">{r.good ? '✅' : '⚠️'} {r.name} — {r.subName}</div>
                <div className="text-sm opacity-80">
                    {r.good ? 'Kích thước này nằm trong cung TỐT theo thước Lỗ Ban. Phù hợp sử dụng.'
                        : 'Kích thước này nằm trong cung XẤU theo thước Lỗ Ban. Nên điều chỉnh thêm/bớt vài cm.'}
                </div>
            </div>
        </div>
    );
}

/* ===== MAIN PAGE ===== */
const TABS = [
    { id: 'compass', label: 'La Kinh', icon: Compass },
    { id: 'kua', label: 'Cung Mệnh', icon: User },
    { id: 'ruler', label: 'Thước Lỗ Ban', icon: Ruler },
];

export default function FengShuiCompass() {
    const [activeTab, setActiveTab] = useState('compass');

    return (
        <div className="antialiased min-h-screen flex flex-col bg-primary text-textmain selection:bg-accent selection:text-primary">
            <div className="noise-overlay"></div>
            <Navbar />

            {/* Hero header */}
            <section className="pt-32 pb-12 px-6 bg-secondary border-b border-bordercolor">
                <div className="max-w-7xl mx-auto">
                    <Link to="/" className="inline-flex items-center gap-2 text-sm text-textmuted hover:text-accent transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4" /> Về trang chủ
                    </Link>
                    <h1 className="font-heading text-4xl md:text-6xl font-black mb-4">
                        La Bàn <span className="text-accent">Phong Thủy</span>
                    </h1>
                    <p className="text-textmuted text-base md:text-lg font-light max-w-2xl">
                        Công cụ tra cứu hướng nhà, Cung Mệnh gia chủ & thước Lỗ Ban — dành riêng cho khách hàng Bách Ngân.
                    </p>
                </div>
            </section>

            {/* Tabs */}
            <section className="py-6 px-6 border-b border-bordercolor">
                <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
                    {TABS.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest border transition-colors duration-300 flex items-center gap-2 ${activeTab === tab.id
                                ? 'bg-accent text-primary border-accent'
                                : 'border-bordercolor text-textmuted hover:border-textmain hover:text-textmain'
                                }`}
                        >
                            <tab.icon className="w-4 h-4" /> {tab.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Content */}
            <section className="py-12 px-6 flex-1">
                <div className="max-w-7xl mx-auto">
                    {activeTab === 'compass' && <CompassTab />}
                    {activeTab === 'kua' && <KuaTab />}
                    {activeTab === 'ruler' && <RulerTab />}
                </div>
            </section>

            <Footer />
        </div>
    );
}
