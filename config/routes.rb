Rails.application.routes.draw do
  mount Cms::Engine => '/', as: 'cms' # localized do
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root to: "pages#index"
  controller :pages do
    get "about-us", action: "about_us"
    # get "contact-us", action: "contact_us"
    get "goods", action: "goods"
    get "products", action: "products"
    get "distributors", actio: "distributors"
    get "markets", actio: "markets"
    get "logistics", action: "logistics"
    get "premium", action: "premium"
    get "article/:id", action: "article", as: "article"
    get "maker/:id", action: "maker", as: "maker"
    get "distributor/:id", action: "distributor", as: "distributor"
    get "market/:id", action: "market", as: "market"
    get "logistic/:id", action: "logistic", as: "logistic"
    get "tradergram", action: "tradergram"
    get "news-page/:id", action: "one_news_page", as: "one-news"
    get "contacts", action: "contacts"
    get "faq", action: "faq"
    get "terms", action: "terms"
    # get "registration", action: "registration"
    get "post_product", action: "post_product"
    get "aboutus", action: "aboutus"
    get "topgoods", action: "topgoods"



    # post "registration", action: "registration"
    post "message", action: "message"
    post "creating_unit", action: "creating_unit"

  end
# end
  namespace :api do
    namespace :v1 do
      resources :menus, only: [:index]
      resources :products, only: [:index]
      resources :manufactures, only: [:index]
      resources :distributors, only: [:index]
      resources :markets, only: [:index]
      resources :logistics, only: [:index]
    end
  end

  match "*url", to: "application#render_not_found", via: [:get, :post, :path, :put, :update, :delete]
end
