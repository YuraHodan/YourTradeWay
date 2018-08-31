Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'

 # localized do
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
    get "article", action: "article"
    get "maker", action: "maker"
    get "distributor", action: "distributor"
    get "market", action: "market"
    get "logistic", action: "logistic"
    get "tradergram", action: "tradergram"
    get "news-page/:id", action: "one_news_page", as: "one_news_page"
    get "contacts", action: "contacts"
    get "faq", action: "faq"
    get "terms", action: "terms"
    # get "registration", action: "registration"
    get "aboutus", action: "aboutus"
    get "topgoods", action: "topgoods"



    # post "registration", action: "registration"
    post "message", action: "message"

  end
# end
  namespace :api do
    namespace :v1 do
      resources :menus, only: [:index]
    end
  end

  match "*url", to: "application#render_not_found", via: [:get, :post, :path, :put, :update, :delete]
end
