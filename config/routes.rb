Rails.application.routes.draw do
  resources :medical_devices, only: [:index]
  resources :subscriptions, only: [:new, :create]
  root "medical_devices#index"
end
