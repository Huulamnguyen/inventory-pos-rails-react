# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(username: "Liam Nguyen", password: "123456789", address: "123 Main Street, Brooklyn, NY 11223", email: "user@example.com", phone: "123-456-789")
store1 = Store.create(store_name: "iPhone Store", address: "456 South Street, Brooklyn, NY 11235", user_id: user1.id)