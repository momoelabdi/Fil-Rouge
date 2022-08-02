Rails.application.routes.draw do
  resources :cours, only: [:index, :show]do
    resources :commandes, only: [ :index, :new, :create, :update, :destroy]
  end
  root 'clients#index'
  get "/commandes", to: "commandes#index"
  get "/cours", to: "cours#index"
  get "/commandes", to: "commandes#new"
  post "/commandes", to: "commandes#create"
  get "/clients", to: "clients#new"
  get "*path", to: "clients#index"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
