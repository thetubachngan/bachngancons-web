import { useState } from "react";
import { ChevronDown, Check, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("Loại công trình dự kiến");

  const projectTypes = [
    "Xây mới nhà phố",
    "Xây mới biệt thự",
    "Cải tạo & Nội thất",
    "Công trình thương mại"
  ];

  // ==========================================
  // TELEGRAM BOT CONFIGURATION
  // ==========================================
  // 1. Tạo bot trên Telegram qua @BotFather
  // 2. Lấy Token bot và điền vào TELEGRAM_BOT_TOKEN
  // 3. Lấy Chat ID bằng cách gửi tin nhắn cho bot rồi truy cập: https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
  // 4. Điền Chat ID vào TELEGRAM_CHAT_ID
  const TELEGRAM_BOT_TOKEN = "8724706672:AAHar8HJMPHW3EpXlEi1Ma3fahF21CYP6SI";
  const TELEGRAM_CHAT_ID = "7177776899";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!TELEGRAM_BOT_TOKEN.includes("YOUR_") && !TELEGRAM_CHAT_ID.includes("YOUR_")) {
      setIsSubmitting(true);
      setSubmitStatus(null);

      const message = `
🔔 *Yêu cầu tư vấn mới*
👤 *Khách hàng:* ${formData.name}
📱 *Số điện thoại:* ${formData.phone}
🏗️ *Loại công trình:* ${selectedProject}
📐 *Diện tích:* ${formData.area || "Không rõ"}
📝 *Ghi chú:* ${formData.notes || "Không có"}
         `;

      try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'Markdown'
          })
        });

        if (response.ok) {
          setSubmitStatus("success");
          setFormData({ name: "", phone: "", area: "", notes: "" });
          setSelectedProject("Loại công trình dự kiến");
        } else {
          setSubmitStatus("error");
        }
      } catch (error) {
        console.error("Error sending message to Telegram:", error);
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);

        // Clear status message after 3 seconds
        setTimeout(() => setSubmitStatus(null), 3000);
      }
    } else {
      // Local simulation if config is not set
      alert('Cảm ơn bạn! Yêu cầu đang được gửi đi...');
      setFormData({ name: "", phone: "", area: "", notes: "" });
      setSelectedProject("Loại công trình dự kiến");
    }
  };

  return (
    <section className="py-24 md:py-32 bg-secondary border-t border-bordercolor overflow-hidden relative" id="contact">
      {/* Large Architectural Lines */}
      <div className="absolute top-0 right-[20%] w-px h-full bg-bordercolor/50 hidden lg:block"></div>
      <div className="absolute top-0 left-[20%] w-px h-full bg-bordercolor/50 hidden lg:block"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 contact-content">
        <div className="bg-primary border border-bordercolor overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-bordercolor">
              <h2 className="font-heading text-3xl md:text-4xl font-black mb-3">Bắt Đầu Xây Tổ Ấm Của Bạn</h2>
              <p className="text-textmuted text-sm mb-10 font-light">
                Để lại thông tin, kỹ sư Bách Ngân sẽ liên hệ tư vấn và báo giá miễn phí trong 24h.
              </p>

              <form
                className="space-y-5"
                onSubmit={handleSubmit}
              >
                <input type="text" name="name" placeholder="Họ và tên *" required value={formData.name} onChange={handleInputChange}
                  className="w-full bg-primary border border-bordercolor px-4 py-4 text-sm text-textmain placeholder:text-textmuted focus:border-accent focus:outline-none transition-colors" />
                <input type="tel" name="phone" placeholder="Số điện thoại *" required value={formData.phone} onChange={handleInputChange}
                  className="w-full bg-primary border border-bordercolor px-4 py-4 text-sm text-textmain placeholder:text-textmuted focus:border-accent focus:outline-none transition-colors" />

                {/* Custom Dropdown */}
                <div className="relative w-full custom-dropdown">
                  <input type="hidden" id="project_type" name="project_type" value={selectedProject === "Loại công trình dự kiến" ? "" : selectedProject} />
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full bg-primary border border-bordercolor px-4 py-4 text-sm hover:border-accent focus:border-accent focus:outline-none transition-all duration-300 flex justify-between items-center"
                  >
                    <span className={`transition-colors ${selectedProject === "Loại công trình dự kiến" ? "text-textmuted" : "text-textmain"}`}>
                      {selectedProject}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                  <ul
                    className={`absolute z-50 w-full left-0 bg-secondary border-x border-b border-bordercolor mt-0 shadow-2xl transition-all duration-300 ${dropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}
                  >
                    {projectTypes.map((type) => (
                      <li
                        key={type}
                        onClick={() => {
                          setSelectedProject(type);
                          setDropdownOpen(false);
                        }}
                        className="px-4 py-3 text-sm text-textmain hover:bg-primary hover:text-accent cursor-pointer border-b border-bordercolor transition-colors duration-200 flex justify-between items-center"
                      >
                        {type}
                        <Check className={`w-4 h-4 text-accent ${selectedProject === type ? 'opacity-100' : 'opacity-0'}`} />
                      </li>
                    ))}
                  </ul>
                </div>

                <input type="text" name="area" placeholder="Diện tích dự kiến (m²)" value={formData.area} onChange={handleInputChange}
                  className="w-full bg-primary border border-bordercolor px-4 py-4 text-sm text-textmain placeholder:text-textmuted focus:border-accent focus:outline-none transition-colors" />
                <textarea name="notes" placeholder="Ghi chú thêm (Vị trí, phong cách mong muốn...)" rows="3" value={formData.notes} onChange={handleInputChange}
                  className="w-full bg-primary border border-bordercolor px-4 py-4 text-sm text-textmain placeholder:text-textmuted focus:border-accent focus:outline-none transition-colors resize-none"></textarea>

                <button type="submit" disabled={isSubmitting}
                  className="w-full bg-accent text-primary py-4 font-bold uppercase tracking-widest text-sm hover:bg-yellow-400 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center">
                  {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu tư vấn"}
                </button>
                {submitStatus === "success" && <p className="text-green-500 text-sm mt-2 text-center">Yêu cầu đã được gửi thành công!</p>}
                {submitStatus === "error" && <p className="text-red-500 text-sm mt-2 text-center">Có lỗi xảy ra, vui lòng thử lại sau.</p>}
              </form>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-between bg-primary relative overflow-hidden">
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-sm uppercase tracking-widest mb-1">Hotline tư vấn</div>
                    <div className="text-textmain md:text-lg font-medium">0912.874.868</div>
                    <div className="text-textmain md:text-lg font-medium">085.865.1818</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-sm uppercase tracking-widest mb-1">Email</div>
                    <div className="text-textmuted text-sm">bachngancons@gmail.com</div>
                    <div className="text-textmuted text-sm mt-1">bachngan.design@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-sm uppercase tracking-widest mb-1">Trụ sở</div>
                    <div className="text-textmuted text-sm leading-relaxed">
                      Số 19, tổ 3 Tình Quang,<br />phường Việt Hưng, Hà Nội
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-bordercolor relative z-10">
                <a href="https://zalo.me/0858651818" target="_blank" rel="noreferrer"
                  className="w-full bg-[#0068FF]/10 text-[#0068FF] border border-[#0068FF]/30 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#0068FF] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Chat trực tiếp qua Zalo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
