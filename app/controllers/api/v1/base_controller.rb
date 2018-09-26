class Api::V1::BaseController < ApplicationController
  respond_to :json

  private

   def countries
    Country.all.map { |country|
      {
        id:    country.id,
        title: country.title
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

  def pages_count
    Logistic.all.count / 12 + 1
  end

  def current_page
    return 1 unless params[:page_number]

    params[:page_number]
  end
end
