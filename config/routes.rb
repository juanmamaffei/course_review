Rails.application.routes.draw do
  #get 'pages/index'
  root "pages#index"

  namespace :api do
    namespace :v1 do
      resources :courses, param: :nick
      resources :reviews, only: [:create, :destroy]
    end
  end

  #match "*path", to: "pages#index", via: :all
  get "*path", to: "pages#index", via: :all

end
