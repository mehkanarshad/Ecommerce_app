# frozen_string_literal: true

# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

user = User.first || User.create!(
  name: 'Test User',
  email: 'test@example.com',
  password: 'password',
  password_confirmation: 'password'
)

20.times do |i|
  Product.create!(
    user: user,
    name: "Product ##{i + 1}",
    description: "Description for Product ##{i + 1}",
    price: rand(10.0..500.0).round(2),
    stock: rand(1..100)
  )
end

puts '✅ Seeded 20 products successfully!'
