# frozen_string_literal: true

require 'faker'

User.destroy_all
Product.destroy_all

puts '🚀 Starting to seed fake users and products...'

10.times do |i|
  user = User.create!(
    name: Faker::Name.name,
    email: Faker::Internet.unique.email,
    password: 'password',
    password_confirmation: 'password',
    confirmed_at: Time.now
  )
  puts "✅ [User #{i + 1}] Created: #{user.email}"

  rand(1..3).times do |j|
    product = Product.create!(
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.sentence,
      price: Faker::Commerce.price(range: 0..100),
      stock: rand(1..50),
      user: user
    )
    puts "   📦 [Product #{j + 1}] for #{user.email}: #{product.name}"
  rescue StandardError => e
    puts "❌ Failed to create product for #{user.email}: #{e.message}"
  end
rescue StandardError => e
  puts "❌ Failed to create user #{i + 1}: #{e.message}"
end

puts "🎉 Done! Seeded #{User.count} users and #{Product.count} products."
