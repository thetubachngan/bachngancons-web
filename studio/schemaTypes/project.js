import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Công trình',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Tên công trình',
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
            title: 'Loại hình',
            type: 'string',
            options: {
                list: [
                    { title: 'Xây mới trọn gói', value: 'xay-moi-tron-goi' },
                    { title: 'Thiết kế nội thất', value: 'thiet-ke-noi-that' },
                    { title: 'Thi công thương mại', value: 'thi-cong-thuong-mai' },
                    { title: 'Cải tạo & Sửa chữa', value: 'cai-tao-sua-chua' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Địa điểm',
            type: 'string',
            description: 'Ví dụ: Hà Nội, Hải Phòng...',
        }),
        defineField({
            name: 'area',
            title: 'Quy mô / Diện tích',
            type: 'string',
            description: 'Ví dụ: 400m2, 3 tầng...',
        }),
        defineField({
            name: 'completionYear',
            title: 'Năm hoàn thành',
            type: 'number',
        }),
        defineField({
            name: 'mainImage',
            title: 'Ảnh đại diện',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'gallery',
            title: 'Thư viện ảnh',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            description: 'Thêm các hình ảnh thực tế của công trình',
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
            title: 'Năm hoàn thành mới nhất',
            name: 'completionYearDesc',
            by: [{ field: 'completionYear', direction: 'desc' }],
        },
        {
            title: 'Ngày đăng mới nhất',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
            subtitle: 'location',
        },
    },
})
