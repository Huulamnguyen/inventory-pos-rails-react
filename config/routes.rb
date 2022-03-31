Rails.application.routes.draw do
  resources :customers, only: [:index, :create, :update, :destroy]
  resources :sale_details, only: [:index, :create, :destroy, :update]
  resources :sales, only: [:index, :create, :show, :update, :destroy]
  resources :supplier_products, only: [:index, :create, :destroy]
  resources :suppliers, only: [:index, :show, :update, :create, :destroy]
  resources :brand_products, only: [:index, :create, :destroy]
  resources :brands, only: [:index, :show, :update, :create, :destroy]
  resources :category_products, only: [:index, :create, :destroy]
  resources :categories, only: [:index, :show, :update, :create, :destroy]
  resources :products, only: [:index, :show, :update, :create, :destroy]

  resources :stores, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:update, :index]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  post "/reset", to: "passwords#reset"
  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
