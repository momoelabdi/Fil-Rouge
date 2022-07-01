Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'cours/index'
      post 'commandes/create'
      delete 'commandes/:id', to: 'commandes#destroy'
    end
  end
  # resources :cours, only: [:index, :show]do
  #   resources :commandes, only: [:new, :crate, :update, :destroy]
  # end
  root 'clients#index'
  # get "/commandes", to: "commandes#new"
  # get "/clients", to: "clients#new"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
