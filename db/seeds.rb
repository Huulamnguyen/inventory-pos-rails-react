# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(username: "Micheal Scott", password: "123", address: "123 Main Street, Brooklyn, NY 11223", email: "test1@gmail.com", phone: "123-456-789")
store1 = Store.create(store_name: "iPhone Store", address: "456 South Street, Brooklyn, NY 11235", user_id: user1.id)
store2 = Store.create(store_name: "Case Store", address: "789 North Street, Brooklyn, NY 11789", user_id: user1.id)

product1 = Product.create(
    title:"iPhone 13 Pro Max", 
    description: "This is iPhone 13 Pro Max from Apple",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-green-select?wid=470&hei=556&fmt=png-alpha&.v=1644969385495",
    inventory: 100,
    retail_price: 999,
    SKU: "IPHONE13PROMAX",
    store_id: store1.id
)

product2 = Product.create(
    title:"iPhone 12 Pro Max", 
    description: "This is iPhone 12 Pro Max from Apple",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617135051000",
    inventory: 100,
    retail_price: 899,
    SKU: "IPHONE12PROMAX",
    store_id: store1.id
)

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