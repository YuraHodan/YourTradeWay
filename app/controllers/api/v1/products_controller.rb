class Api::V1::ProductsController < Api::V1::BaseController
  def index
     @products =  {
      top_products:       filtered_products(Product.premium),
      products:           filtered_products(Product.all),
      recomend_products:  filtered_products(Product.recomend),
      countries:          countries,
      current_page:       current_page,
      pages_count:        pages_count,
      header_slider:      filter_slider(SponsorSlider.show),
      side_slider:        filter_slider(SponsorSideSlider.show),
      type_ids:           params[:type_ids],
      category_ids:       params[:category_ids],
      group_ids:          params[:group_ids],
      country_ids:        params[:country_ids]
      }
    respond_with @products
  end

  private

  def filtered_products(products)
    filtered_data = products
    filtered_data = filtered_data.where(third_menu_id: filter_ids) if filter_ids.any?
    filtered_data << filtered_data.where(second_menu_id: second_ids) if second_ids.any?
    filtered_data = filtered_data&.uniq
    filtered_data = filtered_data.where(country_id: params[:country_ids]) if params[:country_ids].present?
    map_products(filtered_data.paginate(page: current_page, per_page: 12))
  end

  def filter_ids
    array = []
    array << SecondMenu.where(main_menu_id: params[:type_ids]).map(&:third_menus).map(&:ids) if params[:type_ids].present?
    array << SecondMenu.where(id: params[:group_ids]).map(&:third_menus).map(&:ids) if params[:group_ids].present?
    array << ThirdMenu.where(id: params[:category_ids]).pluck(:id) if params[:category_ids].present?
    array = array.flatten.uniq
  end

  def second_ids
    array = []
    array << SecondMenu.where(main_menu_id: params[:type_ids]).map(&:third_menus).map(&:ids) if params[:type_ids].present?
    array << SecondMenu.where(id: params[:group_ids]).map(&:third_menus).map(&:ids) if params[:group_ids].present?
    array = array.flatten.uniq
  end

  def map_products(products)
    products.map{ |product| {
        id:                product.id,
        title:             product.title,
        price:             product.price,
        image_url:         product.logo_image.url,
        manufacture_title: product.manufacture&.title
        }
      }
  end
end
