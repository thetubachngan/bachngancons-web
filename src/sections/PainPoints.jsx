import SectionWrapper from '../components/SectionWrapper'
import Card from '../components/Card'
import { DollarSign, Package, TrendingUp, Clock, Shield, AlertTriangle } from 'lucide-react'

const painPoints = [
    {
        icon: <DollarSign size={32} />,
        title: 'Báo giá mập mờ, chi phí ẩn',
        description: 'Nhiều nhà thầu đưa giá thấp ban đầu rồi phát sinh chi phí liên tục trong quá trình thi công.',
    },
    {
        icon: <Package size={32} />,
        title: 'Vật tư bị thay đổi kém chất lượng',
        description: 'Vật tư cam kết trong hợp đồng bị thay thế bằng loại rẻ hơn, ảnh hưởng chất lượng công trình.',
    },
    {
        icon: <TrendingUp size={32} />,
        title: 'Phát sinh chi phí không kiểm soát',
        description: 'Hạng mục phát sinh liên tục mà không có sự đồng ý của gia chủ, đội chi phí lên 20-30%.',
    },
    {
        icon: <Clock size={32} />,
        title: 'Tiến độ trễ, không ai giám sát',
        description: 'Không có kỹ sư giám sát trực tiếp, thợ thi công tự ý, tiến độ bị chậm hàng tháng.',
    },
    {
        icon: <Shield size={32} />,
        title: 'Không có bảo hành đàng hoàng',
        description: 'Bảo hành chỉ trên giấy, khi công trình có vấn đề thì không liên hệ được nhà thầu.',
    },
    {
        icon: <AlertTriangle size={32} />,
        title: 'Thi công thiếu chuyên nghiệp',
        description: 'Đội ngũ thiếu tay nghề, không có quy trình chuẩn, chất lượng công trình không đồng đều.',
    },
]

export default function PainPoints() {
    return (
        <SectionWrapper id="pain-points">
            <div className="text-center mb-12">
                <span className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider">Bạn có đang lo lắng?</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                    Nỗi lo khi xây nhà
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg">
                    Những vấn đề mà hầu hết chủ nhà đều gặp phải khi tìm đơn vị thi công. Bách Ngân hiểu và cam kết giải quyết triệt để.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {painPoints.map((item, i) => (
                    <Card
                        key={i}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </SectionWrapper>
    )
}
