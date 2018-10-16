class Api::V1::MarketsController < Api::V1::BaseController
  def index
     @markets =  {
      top_markets:      filtered_markets(Market.premium),
      markets:          filtered_markets(Market.all),
      recomend_markets: filtered_markets(Market.recomend),
      countries:        map_countries(Country.all),
      current_page:     current_page,
      pages_count:      pages_count,
      header_slider:    filter_slider(SponsorSlider.show),
      side_slider:      filter_slider(SponsorSideSlider.show)
    }
    respond_with @markets
  end

  private

  def filtered_markets(markets)
    filtered_data = markets
    filtered_data = filtered_data.where(country_id: params[:country_ids]) if params[:country_ids].present?
    filtered_data = filtered_data.where(main_menu_id: params[:type_ids]) if  params[:type_ids].present?
    map_markets(filtered_data.paginate(page: current_page, per_page: 12))
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

  def map_markets(markets)
    markets.map{ |market| {
        id:         market.id,
        title:      market.title,
        country:    market.country&.title,
        image_url:  market.logo_image.url
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
