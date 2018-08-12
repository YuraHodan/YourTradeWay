class PagesController < ApplicationController
  # before_action :initialize_locale_links, except: [:index]

  def index
  end

  def about_us
  end

  def goods
  end

  def message
    binding.pry  ##dsadasajkdkjqwnjkeqwjkehjkqsdhjkasjkdhasjkdqjkdqwjklndqwlkdnqwlneklklqwelkwq
      render json: {}
  end

  def registration

  end

  private

  # def set_locale
  #   redirect_to root_path(locale: I18n.default_locale) if params[:locale].blank?

  #   I18n.locale = params[:locale] if params[:locale].present?
  # end

  # def initialize_locale_links(route_name = nil)
  #   @locale_links = {}
  #   route_name ||= action_name
  #   I18n.available_locales.each do |locale|
  #     @locale_links[locale.to_sym] = send("#{route_name}_#{locale}_path")
  #   end
  # end
end
