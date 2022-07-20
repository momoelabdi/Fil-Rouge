Rails.application.routes.draw do
  resources :cours, only: [:index]do
    resources :commandes, only: [:new, :create, :update, :destroy]
  end
  root 'clients#index'

  get "/commandes", to: "commandes#new"
  post "/commandes/new", to: "commandes#create"
  delete 'commandes/:id', to: 'commandes#destroy'
  get "/clients", to: "clients#new"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
