Rails.application.routes.draw do
  resources :cours
  resources :commandes
  root 'clients#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
