import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const api = new WooCommerceRestApi({
    url: 'https://creationdesks.com',
    consumerKey: 'ck_0b499b6914dc402bf6afeb695e3eebacfcf49fa3',
    consumerSecret: 'cs_07cd071e2de9e4cb357286b65c38d56d02905d34',
    version: 'wc/v3'
});

// Example: Fetch products
api.get('products')
    .then((response) => {
        console.log('Products:', response.data);
    })
    .catch((error) => {
        console.log('Error fetching products:', error);
    });
