import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(300),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    }),
    defineField({
      name: 'organizer',
      title: 'Organizer',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'isFree',
      title: 'Free Event',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isDonation',
      title: 'Donation',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'link',
      title: 'Website or Instagram Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    })
  ],

  preview: {
    select: {
      title: 'title',
      author: 'organizer',
      media: 'mainImage',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },
  },
})
