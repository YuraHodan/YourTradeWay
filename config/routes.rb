Rails.application.routes.draw do
  root to: "pages#index"

  controller :pages do
    get "about-us", action: "about_us"
    # get "contact-us", action: "contact_us"
    get "goods", action: "goods"
    get "producer", action: "producer"
    get "distributors", actio: "distributors"
    get "market", actio: "market"
    get "logistics", action: "logistics"
    get "premium", action: "premium"
    get "onegoods", action: "onegoods"
    get "oneproducter", action: "oneproducter"
    get "onedistributors", action: "onedistributors"
    get "onemarket", action: "onemarket"
    get "onelogistics", action: "onelogistics"
    get "tradergram", action: "tradergram"
  end

  match "*url", to: "application#render_not_found", via: [:get, :post, :path, :put, :update, :delete]
end
