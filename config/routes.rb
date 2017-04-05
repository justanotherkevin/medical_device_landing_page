Rails.application.routes.draw do
  resources :medical_devices, only: [:index]

  root "medical_devices#index"
end
