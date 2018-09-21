class Api::V1::DistributorsController < Api::V1::BaseController
  def index
     @distributors =  {
      top_distributors:       map_distributors(Distributor.premium),
      distributors:           map_distributors(Distributor.all),
      recomend_distributors:  map_distributors(Distributor.recomend)
    }
    respond_with @distributors
  end

  private

  def map_distributors(distributors)
    distributors.map{ |distributor| {
        id:         distributor.id,
        title:   distributor.title,
        country:       distributor.country.title,
        image_url:  distributor.logo_image.url
        }
      }
  end
end
