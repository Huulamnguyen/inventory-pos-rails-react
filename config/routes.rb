Rails.application.routes.draw do
  
  resources :stores, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:update, :destroy, :index]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  post "/reset", to: "passwords#reset"
  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
