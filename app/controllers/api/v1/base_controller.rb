class Api::V1::BaseController < ApplicationController
  respond_to :json
  before_action :set_locale_json

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
    slides.uniq.map { |slide|
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

  def filter_slider(slides)
    filtered_slides = params[:type_ids].blank? && params[:group_ids].blank? && params[:category_ids].blank?  ? slides : []
    filtered_slides << slides.where(main_menu_id: params[:type_ids]) if params[:type_ids].present?
    filtered_slides << slides.where(second_menu_id: params[:group_ids]) if params[:group_ids].present?
    filtered_slides << slides.where(third_menu_id: params[:category_ids]) if params[:category_ids].present?
    map_slider(filtered_slides.flatten)
  end

  def set_locale_json
    I18n.locale = $zalupa
  end
end
