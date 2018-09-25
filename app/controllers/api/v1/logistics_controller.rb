class Api::V1::LogisticsController < Api::V1::BaseController
  def index
     @logistics =  {
      top_logistics:      filtered_logistics(Logistic.premium),
      logistics:          filtered_logistics(Logistic.all),
      recomend_logistics: filtered_logistics(Logistic.recomend),
      countries:          map_countries(Country.all),
      current_page:       current_page,
      pages_count:        pages_count,
      header_slider:      map_slider(SponsorSlider.show),
      side_slider:        map_slider(SponsorSideSlider.show)
    }
    respond_with @logistics
  end

  private

  def filtered_logistics(logistics)
    filtered_data = logistics
    filtered_data = filtered_data.where(country_id: params[:country_ids]) if params[:country_ids].present?
    filtered_data = filtered_data.where(main_menu_id: params[:type_ids]) if  params[:type_ids].present?
    map_logistics(filtered_data)
  end

  def pages_count
    Logistic.all.count / 12 + 1
  end

  def current_page
    return 1 unless params[:page_number]

    params[:page_number]
  end

  def map_countries(countries)
    countries.map { |country|
      { id:    country.id,
        title: country.title
      }
    }

  end

  def map_logistics(logistics)
    logistics.map{ |logistic| {
        id:         logistic.id,
        title:      logistic.title,
        country:    logistic.country.title,
        image_url:  logistic.logo_image.url
        }
      }
  end

  def map_slider(slides)
    slides.map { |slide|
      {
        image_url: slide.image.url
      }
    }
  end
end
