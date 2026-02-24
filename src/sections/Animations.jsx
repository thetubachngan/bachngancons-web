export default function Animations() {
    return (
        <section className="py-24 bg-primary px-6" id="animations">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center section-header">
                    <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Quy Trình & Tầm Nhìn</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-black text-textmain mb-6">Câu Chuyện Bách Ngân</h2>
                    <div className="h-px w-24 bg-bordercolor mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 feature-grid">
                    {/* Animation 1: Trust Foundation */}
                    <div className="card-item group">
                        <div className="bg-secondary border border-bordercolor p-6 hover:border-accent transition-colors duration-300 h-full">
                            <div className="aspect-square w-full mb-6 flex items-center justify-center overflow-hidden bg-primary border border-bordercolor">
                                <img
                                    src="/trust-foundation.svg"
                                    alt="Xây Dựng Phễu Niềm Tin"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-textmain mb-2">Xây Dựng Phễu Niềm Tin</h3>
                            <p className="text-textmuted text-sm font-light leading-relaxed">
                                Từ bản vẽ kỹ thuật AutoCAD 2D chính xác đến công trình 3D hoàn chỉnh — mỗi nét vẽ đều mang giá trị niềm tin.
                            </p>
                        </div>
                    </div>

                    {/* Animation 2: Operation System */}
                    <div className="card-item group">
                        <div className="bg-secondary border border-bordercolor p-6 hover:border-accent transition-colors duration-300 h-full">
                            <div className="aspect-[5/2] w-full mb-6 flex items-center justify-center overflow-hidden bg-primary border border-bordercolor">
                                <img
                                    src="/operation-system.svg"
                                    alt="Hệ Thống Vận Hành"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-textmain mb-2">Hệ Thống Vận Hành</h3>
                            <p className="text-textmuted text-sm font-light leading-relaxed">
                                5 bánh răng đồng bộ: Thiết kế → Xin phép → Thi công → Nghiệm thu → Bảo hành — vận hành khép kín, chất lượng trường tồn.
                            </p>
                        </div>
                    </div>

                    {/* Animation 3: Space Harmony */}
                    <div className="card-item group">
                        <div className="bg-secondary border border-bordercolor p-6 hover:border-accent transition-colors duration-300 h-full">
                            <div className="aspect-square w-full mb-6 flex items-center justify-center overflow-hidden bg-primary border border-bordercolor">
                                <img
                                    src="/space-harmony.svg"
                                    alt="Giao Thoa Không Gian"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-textmain mb-2">Giao Thoa Không Gian</h3>
                            <p className="text-textmuted text-sm font-light leading-relaxed">
                                La kinh định vị phong thủy, luồng gió đối lưu tự nhiên, ánh sáng tràn ngập — thiết kế vì sức khỏe và vận khí.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
