import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'design',
    title: 'Thiết kế',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Tên thiết kế / Dự án',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug (URL)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Loại hình thiết kế',
            type: 'string',
            options: {
                list: [
                    { title: 'Thiết kế nội thất', value: 'thiet-ke-noi-that' },
                    { title: 'Thiết kế kiến trúc', value: 'thiet-ke-kien-truc' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'architecturalType',
            title: 'Loại hình kiến trúc',
            type: 'string',
            options: {
                list: [
                    { title: 'Nhà phố', value: 'nha-pho' },
                    { title: 'Biệt thự', value: 'biet-thu' },
                    { title: 'Căn hộ chung cư', value: 'can-ho' },
                    { title: 'Văn phòng', value: 'van-phong' },
                    { title: 'Nhà cấp 4 / Cấp 4 mái Thái', value: 'nha-cap-4' },
                    { title: 'Nhà trọ / Chung cư mini', value: 'nha-tro' },
                    { title: 'Quán Cafe / Nhà hàng', value: 'fnb' },
                ],
            },
            description: 'Phân loại công trình (ví dụ: Nhà phố, Biệt thự...)',
        }),
        defineField({
            name: 'clientName',
            title: 'Tên chủ đầu tư',
            type: 'string',
            description: 'Tên khách hàng hoặc chủ đầu tư',
        }),
        defineField({
            name: 'location',
            title: 'Địa chỉ công trình',
            type: 'string',
            description: 'Ví dụ: Quận 9, TP.HCM',
        }),
        defineField({
            name: 'designStyle',
            title: 'Phong cách thiết kế',
            type: 'string',
            options: {
                list: [
                    { title: 'Hiện đại (Modern)', value: 'Hien dai' },
                    { title: 'Tối giản (Minimalism)', value: 'Toi gian' },
                    { title: 'Tân cổ điển (Neo-classic)', value: 'Tan co dien' },
                    { title: 'Cổ điển (Classic)', value: 'Co dien' },
                    { title: 'Đông Dương (Indochine)', value: 'Dong duong' },
                    { title: 'Bắc Âu (Scandinavian)', value: 'Bac Âu' },
                    { title: 'Thô mộc (Rustic)', value: 'Tho moc' },
                    { title: 'Công nghiệp (Industrial)', value: 'Cong nghiep' },
                    { title: 'Nhiệt đới (Tropical)', value: 'Nhiet doi' },
                ],
            },
        }),
        defineField({
            name: 'area',
            title: 'Diện tích (m2)',
            type: 'string',
            description: 'Ví dụ: 120m2, 350m2...',
        }),
        defineField({
            name: 'completionYear',
            title: 'Năm hoàn thành',
            type: 'number',
        }),

        defineField({
            name: 'gallery',
            title: 'Hình ảnh thiết kế',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            description: 'Thêm toàn bộ hình ảnh. Hình đầu tiên sẽ tự động được chọn làm ảnh đại diện.',
            validation: (rule) => rule.required().min(1).error('Cần ít nhất 1 hình ảnh để làm ảnh đại diện.'),
        }),
        defineField({
            name: 'body',
            title: 'Mô tả chi tiết',
            type: 'array',
            of: [
                { type: 'block' },
                { type: 'image', options: { hotspot: true } },
            ],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Ngày đăng',
            type: 'datetime',
            initialValue: () => new Date().toISOString()
        }),
    ],
    orderings: [
        {
            title: 'Ngày đăng mới nhất',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'gallery.0',
            subtitle: 'category',
        },
    },
})
