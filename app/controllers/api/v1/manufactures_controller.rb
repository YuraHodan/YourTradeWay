class Api::V1::ManufacturesController < Api::V1::BaseController
  def index
     @manufactures =  {
      top_manufactures:       map_manufactures(Manufacture.premium),
      manufactures:           map_manufactures(Manufacture.all),
      recomend_manufactures:  map_manufactures(Manufacture.recomend)
    }
    respond_with @manufactures
  end

  private

  def map_manufactures(manufactures)
    manufactures.map{ |manufacture| {
        id:         manufacture.id,
        title:      manufacture.title,
        country:    manufacture.country.title,
        image_url:  manufacture.logo_image.url
        }
      }
  end
end
