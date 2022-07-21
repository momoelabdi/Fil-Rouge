Rails.application.routes.draw do
  resources :cours, only: [:index, :show]do
    resources :commandes, only: [ :index, :new, :create, :update, :destroy]
  end
  root 'clients#index'
  get "/commandes", to: "commandes#index"
  post "/commandes", to: "commandes#create"
  get "/clients", to: "clients#new"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end


# Rails.application.routes.draw do
#   resources :cours do
#     resources :clients do
#       resources :commandes do
#         get 'commandes/index'
#         post 'commandes/create'
#         delete 'commandes/:id', to: 'commandes#destroy'
#       end
#     end
#   end
#   root 'clients#index'
#   # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
# end
