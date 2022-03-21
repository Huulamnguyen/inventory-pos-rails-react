# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#### STORE 1 APPLE WATCHES
user1 = User.create(username: "Micheal Scott", password: "123", address: "123 Main Street, Brooklyn, NY 11223", email: "test1@gmail.com", phone: "123-456-789")

store1 = Store.create(store_name: "iPhone Store", address: "456 South Street, Brooklyn, NY 11235", user_id: user1.id)

product1 = Product.create(
    title: "Starlight Aluminum Case with Braided Solo Loop - Flamingo", 
    description: "The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN1L3ref_VW_34FR+watch-45-alum-starlight-nc-7s_VW_34FR_WF_CO?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1645128544617%2C1631661833000",
    inventory: 50,
    retail_price: 349,
    SKU: "APPLEWATCH-FLAMIGO",
    store_id: store1.id
)

product2 = Product.create(
    title:"Starlight Aluminum Case with Braided Solo Loop - Bright Green", 
    description: "The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN023ref_VW_34FR+watch-41-alum-starlight-nc-7s_VW_34FR_WF_CO?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1645128542140%2C1631661270000",
    inventory: 55,
    retail_price: 359,
    SKU: "APPLEWATCH-BRIGHTGREEN",
    store_id: store1.id
)

product3 = Product.create(
    title:"Starlight Aluminum Case with Braided Solo Loop - Abyss Blue", 
    description: "The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML4Q3ref_VW_34FR+watch-41-alum-starlight-nc-7s_VW_34FR_WF_CO?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1630364929000%2C1631661270000",
    inventory: 59,
    retail_price: 369,
    SKU: "APPLEWATCH-ABYSSBLUE",
    store_id: store1.id
)

product4 = Product.create(
    title:"Starlight Aluminum Case with Nike Sport Band - Pink Oxford/Rose Whisper", 
    description: "The Nike Sport Band is made from a durable high-performance fluoroelastomer with compression-molded perforations for breathability.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN6P3_VW_34FR+watch-41-alum-starlight-nc-nike7s_VW_34FR_WF_CO?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1645128297853%2C1631662192000",
    inventory: 69,
    retail_price: 359,
    SKU: "APPLEWATCHNIKE-PINKOXFORD",
    store_id: store1.id
)

product5 = Product.create(
    title:"Starlight Aluminum Case with Nike Sport Loop - Cargo Khaki", 
    description: "The Nike Sport Loop is made from a breathable nylon weave featuring the iconic Nike swoosh logo, in colors exclusive to Nike.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML2V3_VW_34FR+watch-41-alum-starlight-nc-nike7s_VW_34FR_WF_CO?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171190000%2C1631662192000",
    inventory: 78,
    retail_price: 359,
    SKU: "APPLEWATCHNIKE-CARGOKHAKI",
    store_id: store1.id
)

product6 = Product.create(
    title:"Starlight Aluminum Case with Nike Sport Loop - Summit White", 
    description: "The Nike Sport Loop is made from a breathable nylon weave featuring the iconic Nike swoosh logo, in colors exclusive to Nike.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML2W3_VW_34FR+watch-41-alum-starlight-nc-nike7s_VW_34FR_WF_CO?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171200000%2C1631662192000",
    inventory: 79,
    retail_price: 359,
    SKU: "APPLEWATCHNIKE-SUMMITWHITE",
    store_id: store1.id
)

### Store 1: Product and Category
category1 = Category.create(name: "Apple Watch", description: "This is iPhone Apple Watches")
category1_product1 = CategoryProduct.create(category_id: category1.id, product_id: product1.id)
category1_product2 = CategoryProduct.create(category_id: category1.id, product_id: product2.id)
category1_product3 = CategoryProduct.create(category_id: category1.id, product_id: product3.id)

category2 = Category.create(name: "Apple Watch Nike", description: "This is iPhone Apple Watches Nike")
category2_product4 = CategoryProduct.create(category_id: category2.id, product_id: product4.id)
category2_product5 = CategoryProduct.create(category_id: category2.id, product_id: product5.id)
category2_product6 = CategoryProduct.create(category_id: category2.id, product_id: product6.id)

### STORE 2 IPHONE CASES
store2 = Store.create(store_name: "Case Store", address: "789 North Street, Brooklyn, NY 11789", user_id: user1.id)
product3 = Product.create(
    title:"iPhone 13 Pro Max", 
    description: "This is iPhone 13 Pro Max from Apple",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-green-select?wid=470&hei=556&fmt=png-alpha&.v=1644969385495",
    inventory: 100,
    retail_price: 999,
    SKU: "IPHONE13PROMAX",
    store_id: store2.id
)

product4 = Product.create(
    title:"iPhone 12 Pro Max", 
    description: "This is iPhone 12 Pro Max from Apple",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617135051000",
    inventory: 100,
    retail_price: 899,
    SKU: "IPHONE12PROMAX",
    store_id: store2.id
)

