Rails.application.routes.draw do
  resources :cours, only: [:index, :show]do
    resources :commandes, only: [ :index, :new, :create, :update, :destroy]
  end
  root 'clients#index'
  get "*path", to: "clients#index"
  get "/commandes", to: "commandes#index"
  post "/commandes", to: "commandes#create"
  get "/clients", to: "clients#new"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
