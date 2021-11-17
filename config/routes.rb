Rails.application.routes.draw do
  get 'pages/index'
  root "pages#index"

  #match "*path", to: "pages#index", via: :all

  namespace :api do
    namespace :v1 do
      resources :courses, param: :nick
      resources :review, only: [:create, :destroy]
    end
  end
end
