import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Bài viết',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tiêu đề',
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
      title: 'Danh mục',
      type: 'string',
      options: {
        list: [
          { title: 'Kỹ thuật thi công', value: 'ky-thuat-thi-cong' },
          { title: 'Vật liệu xây dựng', value: 'vat-lieu-xay-dung' },
          { title: 'Kiến thức nền móng', value: 'kien-thuc-nen-mong' },
          { title: 'Thiết kế nội thất', value: 'thiet-ke-noi-that' },
          { title: 'Phong thủy', value: 'phong-thuy' },
          { title: 'Tin tức công ty', value: 'tin-tuc-cong-ty' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Mô tả ngắn',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'gallery',
      title: 'Thư viện ảnh',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Lấy ảnh đầu tiên làm ảnh đại diện',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Ngày đăng',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Nội dung',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
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
