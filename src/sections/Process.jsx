import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      // Animate the vertical line drawing down
      tl.fromTo(".process-line",
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, duration: 1.5, ease: "power3.inOut" }
      );

      // Animate each step popping in
      tl.fromTo(".process-step",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.3, ease: "back.out(1.5)" },
        "-=1.0"
      );

      // Add a small hover pulse to the circles inside steps when they appear
      tl.fromTo(".step-circle",
        { scale: 0 },
        { scale: 1, duration: 0.6, stagger: 0.3, ease: "elastic.out(1, 0.5)" },
        "-=1.4"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-primary to-secondary px-6 relative" id="process" ref={sectionRef}>
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16 text-center section-header">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Minh Bạch Trong Từng Bước</p>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-textmain mb-6">Quy Trình Thi Công</h2>
        </div>

        <div className="bg-secondary border border-bordercolor shadow-xl rounded-xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
          <div className="relative space-y-0 z-10">
            <div className="process-line absolute left-[23px] top-[48px] bottom-0 w-[2px] bg-accent hidden md:block z-0"></div>

            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 pb-10 relative z-10 process-step group">
              <div className="flex gap-6 md:w-full">
                <div className="flex flex-col items-center">
                  <div className="step-circle w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center font-black text-lg shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(52,211,153,0.5)]">1</div>
                  <div className="w-[2px] flex-1 bg-bordercolor mt-2 md:hidden"></div>
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-xl font-bold text-textmain mb-1 group-hover:text-accent transition-colors">Khảo sát & Tư vấn miễn phí</h3>
                  <p className="text-textmuted text-sm font-light">Đội ngũ kỹ sư đến tận nơi khảo sát hiện trạng, tư vấn phương án tối ưu.</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 pb-10 relative z-10 process-step group">
              <div className="flex gap-6 md:w-full">
                <div className="flex flex-col items-center">
                  <div className="step-circle w-12 h-12 rounded-full bg-secondary border-2 border-accent text-accent flex items-center justify-center font-black text-lg shrink-0 group-hover:bg-accent group-hover:text-primary transition-colors hover:shadow-[0_0_15px_rgba(52,211,153,0.5)]">2</div>
                  <div className="w-[2px] flex-1 bg-bordercolor mt-2 md:hidden"></div>
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-xl font-bold text-textmain mb-1 group-hover:text-accent transition-colors">Thiết kế & Báo giá chi tiết</h3>
                  <p className="text-textmuted text-sm font-light">Bản vẽ 3D, báo giá từng hạng mục, không phát sinh ẩn.</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 pb-10 relative z-10 process-step group">
              <div className="flex gap-6 md:w-full">
                <div className="flex flex-col items-center">
                  <div className="step-circle w-12 h-12 rounded-full bg-secondary border-2 border-accent text-accent flex items-center justify-center font-black text-lg shrink-0 group-hover:bg-accent group-hover:text-primary transition-colors hover:shadow-[0_0_15px_rgba(52,211,153,0.5)]">3</div>
                  <div className="w-[2px] flex-1 bg-bordercolor mt-2 md:hidden"></div>
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-xl font-bold text-textmain mb-1 group-hover:text-accent transition-colors">Ký hợp đồng & Thanh toán theo giai đoạn</h3>
                  <p className="text-textmuted text-sm font-light">"Làm tới đâu, trả tiền tới đó" — mọi phát sinh phải ký duyệt.</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-6 pb-10 relative z-10 process-step group">
              <div className="flex gap-6 md:w-full">
                <div className="flex flex-col items-center">
                  <div className="step-circle w-12 h-12 rounded-full bg-secondary border-2 border-accent text-accent flex items-center justify-center font-black text-lg shrink-0 group-hover:bg-accent group-hover:text-primary transition-colors hover:shadow-[0_0_15px_rgba(52,211,153,0.5)]">4</div>
                  <div className="w-[2px] flex-1 bg-bordercolor mt-2 md:hidden"></div>
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-xl font-bold text-textmain mb-1 group-hover:text-accent transition-colors">Thi công — Giám sát — Báo cáo hàng ngày</h3>
                  <p className="text-textmuted text-sm font-light">KS giám sát trực tiếp công trường, gửi ảnh/video tiến độ cho gia chủ.</p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row gap-6 relative z-10 process-step group">
              <div className="flex gap-6 md:w-full">
                <div className="flex flex-col items-center">
                  <div className="step-circle w-12 h-12 rounded-full bg-secondary border-2 border-accent text-accent flex items-center justify-center font-black text-lg shrink-0 group-hover:bg-accent group-hover:text-primary transition-colors hover:shadow-[0_0_15px_rgba(52,211,153,0.5)]">5</div>
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-xl font-bold text-textmain mb-1 group-hover:text-accent transition-colors">Nghiệm thu & Bàn giao — Bảo hành 5 năm</h3>
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
