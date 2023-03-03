const MONGO_ID_MOCK = '537eed02ed345b2e039652d2';

const PRODUCT_MOCK_INSTANCE = {
  _id: '537eed02ed345b2e039652d2',
  product: 'SAMSUNG GALAXY S20FE',
  description: 'no-desc',
  slug: 'galaxy-s20',
  unit_price: 1999.99,
  quantity: 10,
  category_id: {
    name: 'SMARTPHONE',
    status: 'active',
  },
};

const PRODUCT_MOCK_PAYLOAD = {
  product: 'SAMSUNG GALAXY S20FE',
  description: 'no-desc',
  slug: 'galaxy-s20',
  unit_price: 1999.99,
  quantity: 10,
  category_id: '551137c2f9e1fac808a5f572',
};

module.exports = {
  PRODUCT_MOCK_INSTANCE,
  PRODUCT_MOCK_PAYLOAD,
  MONGO_ID_MOCK,
};
