Rails.application.routes.draw do
  resources :subscriptions, only: [:index, :new, :create]
  root "subscriptions#index"
end
