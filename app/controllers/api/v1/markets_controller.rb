class Api::V1::MarketsController < Api::V1::BaseController
  def index
     @markets =  {
      top_markets:       map_markets(Market.premium),
      markets:           map_markets(Market.all),
      recomend_markets:  map_markets(Market.recomend)
    }
    respond_with @markets
  end

  private

  def map_markets(markets)
    markets.map{ |market| {
        id:         market.id,
        title:      market.title,
        country:    market.country.title,
        image_url:  market.logo_image.url
        }
      }
  end
end
