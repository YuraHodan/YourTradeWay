class Api::V1::LogisticsController < Api::V1::BaseController
  def index
     @logistics =  {
      top_logistics:       map_logistics(Logistic.premium),
      logistics:           map_logistics(Logistic.all),
      recomend_logistics:  map_logistics(Logistic.recomend)
    }
    respond_with @logistics
  end

  private

  def map_logistics(logistics)
    logistics.map{ |logistic| {
        id:         logistic.id,
        title:      logistic.title,
        country:    logistic.country.title,
        image_url:  logistic.logo_image.url
        }
      }
  end
end
