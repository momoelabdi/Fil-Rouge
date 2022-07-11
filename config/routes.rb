Rails.application.routes.draw do
  resources :cours, only: [:index, :show]do
    resources :commandes, only: [:new, :crate, :update, :destroy]
  end
  root 'clients#index'
  get "/commandes", to: "commandes#new"
  post "/commandes", to: "commandes#create"
  get "/clients", to: "clients#new"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
