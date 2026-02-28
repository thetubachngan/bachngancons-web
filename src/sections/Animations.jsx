export default function Animations() {
    const v = Date.now(); // cache bust
    return (
        <>
            {/* Section Header */}
            <section className="py-16 bg-primary px-6" id="animations">
                <div className="max-w-4xl mx-auto text-center section-header">
                    <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Quy Trình & Tầm Nhìn</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-black text-textmain mb-6">Câu Chuyện Bách Ngân</h2>
                    <div className="h-px w-24 bg-bordercolor mx-auto"></div>
                </div>
            </section>

            {/* Animation 1: Trust Foundation */}
            <section className="py-16 bg-secondary px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8 text-center">
                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-textmain mb-3">Xây Dựng Phễu Niềm Tin</h3>
                        <p className="text-textmuted text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
                            Từ bản vẽ kỹ thuật AutoCAD 2D chính xác đến công trình 3D hoàn chỉnh — mỗi nét vẽ đều mang giá trị niềm tin.
                        </p>
                    </div>
                    <div className="bg-primary border border-bordercolor p-4 md:p-8 rounded-xl shadow-2xl overflow-hidden">
                        <object
                            type="image/svg+xml"
                            data={`/trust-foundation.svg?v=${v}`}
                            aria-label="Xây Dựng Phễu Niềm Tin"
                            className="w-full h-auto mx-auto"
                            style={{ minHeight: '400px', maxHeight: '550px' }}
                        >
                            Trình duyệt không hỗ trợ SVG
                        </object>
                    </div>
                </div>
            </section>

            {/* Animation 2: Operation System */}
            <section className="py-16 bg-primary px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8 text-center">
                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-textmain mb-3">Hệ Thống Vận Hành</h3>
                        <p className="text-textmuted text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
                            5 bánh răng đồng bộ: Thiết kế → Xin phép → Thi công → Nghiệm thu → Bảo hành — vận hành khép kín, chất lượng trường tồn.
                        </p>
                    </div>
                    <div className="bg-secondary border border-bordercolor p-4 md:p-8 rounded-xl shadow-2xl overflow-hidden">
                        <object
                            type="image/svg+xml"
                            data={`/operation-system.svg?v=${v}`}
                            aria-label="Hệ Thống Vận Hành"
                            className="w-full h-auto mx-auto"
                            style={{ minHeight: '250px', maxHeight: '400px' }}
                        >
                            Trình duyệt không hỗ trợ SVG
                        </object>
                    </div>
                </div>
            </section>

            {/* Animation 3: Space Harmony */}
            <section className="py-16 bg-secondary px-6 md:pb-24">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8 text-center">
                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-textmain mb-3">Giao Thoa Không Gian</h3>
                        <p className="text-textmuted text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
                            La kinh định vị phong thủy, luồng gió đối lưu tự nhiên, ánh sáng tràn ngập — thiết kế vì sức khỏe và vận khí.
                        </p>
                    </div>
                    <div className="bg-primary border border-bordercolor p-4 md:p-8 rounded-xl shadow-2xl overflow-hidden">
                        <object
                            type="image/svg+xml"
                            data={`/space-harmony.svg?v=${v}`}
                            aria-label="Giao Thoa Không Gian"
                            className="w-full h-auto mx-auto"
                            style={{ minHeight: '400px', maxHeight: '550px' }}
                        >
                            Trình duyệt không hỗ trợ SVG
                        </object>
                    </div>
                </div>
            </section>
        </>
    );
}
