# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check
  put 'user/update', to: 'user#update'
  get '/user/profile', to: 'user#profile'

  get '/products', to: 'products#index'
  get 'products/show', to: 'products#show'
  get 'products/update', to: 'products#update'
  get 'products/destroy', to: 'products#destroy'

  # Defines the root path route ("/")
  # root "posts#index"
end
