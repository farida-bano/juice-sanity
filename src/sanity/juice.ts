// src/sanity/juice.ts
const juice ={
  name: 'juice',
  title: 'Juice',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'string',
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'string',
      description: 'Number of reviews',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
      description: 'Discount message, if any',
    },
    {
      name: 'stockQuantity',
      title: 'Stock Quantity',
      type: 'string',
      description: 'Available stock of the juice',
    },
    {
      name: 'CODAvailability',
      title: 'COD Availability',
      type: 'boolean',
      description: 'Is cash on delivery available for this juice?',
    },
    // Add new fields for Buy Now, Add to Cart, Wishlist
    {
      name: 'buyNow',
      title: 'Buy Now',
      type: 'boolean',
      description: 'Is the Buy Now option available for this juice?',
    },
    {
      name: 'addToCart',
      title: 'Add to Cart',
      type: 'boolean',
      description: 'Is the Add to Cart option available for this juice?',
    },
    {
      name: 'wishlist',
      title: 'Add to Wishlist',
      type: 'boolean',
      description: 'Is the Wishlist option available for this juice?',
    },
  ],
};
export default juice;