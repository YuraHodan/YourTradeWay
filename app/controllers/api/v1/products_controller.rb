class Api::V1::ProductsController < Api::V1::BaseController
  def index
     @products =  {
      top_products:       map_products(Product.premium),
      products:           map_products(Product.all),
      recomend_products:  map_products(Product.recomend)
    }
    respond_with @products
  end

  private

  def map_products(products)
    products.map{ |product| {
        id:                product.id,
        title:             product.title,
        price:             product.price,
        image_url:         product.logo_image.url,
        manufacture_title: product.manufacture.title
        }
      }
  end
end
