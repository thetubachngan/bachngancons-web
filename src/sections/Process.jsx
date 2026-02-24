export default function Process() {
  return (
    <section className="py-24 bg-primary px-6" id="process">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center section-header">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Minh Bạch Trong Từng Bước</p>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-textmain mb-6">Quy Trình Thi Công</h2>
        </div>

        <div className="bg-secondary border border-bordercolor p-8 md:p-12 feature-grid relative overflow-hidden">
          <div className="relative space-y-0 z-10">
            <div className="timeline-line absolute left-[23px] top-[48px] bottom-0 w-[2px] bg-bordercolor hidden md:block z-0"></div>

            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 pb-10 relative z-10 card-item">
              <div className="flex gap-6 md:w-full">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center font-black text-lg shrink-0">1</div>
                  <div className="w-[2px] flex-1 bg-bordercolor mt-2 md:hidden"></div>
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-xl font-bold mb-1">Khảo sát & Tư vấn miễn phí</h3>
                  <p className="text-textmuted text-sm font-light">Đội ngũ kỹ sư đến tận nơi khảo sát hiện trạng, tư vấn phương án tối ưu.</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 pb-10 relative z-10 card-item">
              <div className="flex gap-6 md:w-full">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary border border-bordercolor text-textmain flex items-center justify-center font-black text-lg shrink-0">2</div>
                  <div className="w-[2px] flex-1 bg-bordercolor mt-2 md:hidden"></div>
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-xl font-bold mb-1">Thiết kế & Báo giá chi tiết</h3>
                  <p className="text-textmuted text-sm font-light">Bản vẽ 3D, báo giá từng hạng mục, không phát sinh ẩn.</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 pb-10 relative z-10 card-item">
              <div className="flex gap-6 md:w-full">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary border border-bordercolor text-textmain flex items-center justify-center font-black text-lg shrink-0">3</div>
                  <div className="w-[2px] flex-1 bg-bordercolor mt-2 md:hidden"></div>
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-xl font-bold mb-1">Ký hợp đồng & Thanh toán theo giai đoạn</h3>
                  <p className="text-textmuted text-sm font-light">"Làm tới đâu, trả tiền tới đó" — mọi phát sinh phải ký duyệt.</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-6 pb-10 relative z-10 card-item">
              <div className="flex gap-6 md:w-full">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary border border-bordercolor text-textmain flex items-center justify-center font-black text-lg shrink-0">4</div>
                  <div className="w-[2px] flex-1 bg-bordercolor mt-2 md:hidden"></div>
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-xl font-bold mb-1">Thi công — Giám sát — Báo cáo hàng ngày</h3>
                  <p className="text-textmuted text-sm font-light">KS giám sát trực tiếp công trường, gửi ảnh/video tiến độ cho gia chủ.</p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row gap-6 relative z-10 card-item">
              <div className="flex gap-6 md:w-full">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary border border-bordercolor text-textmain flex items-center justify-center font-black text-lg shrink-0">5</div>
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-xl font-bold mb-1">Nghiệm thu & Bàn giao — Bảo hành 5 năm</h3>
                  <p className="text-textmuted text-sm font-light">Nghiệm thu từng hạng mục, bàn giao chìa khóa, bảo hành dài hạn.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
