class PagesController < ApplicationController
  before_action :initialize_locale_links, except: [:index, :locale]
  before_action :set_locale_for_api

  def index
    @new_manufactures = Manufacture.last(8)
    @last_news = Article.last(3)
    @main_page_slider = MainPageSlider.show
    initialize_locale_links("root")
    @main_page_info = MainPage.first_or_initialize
  end

  def aboutus
    @about_us = AboutUs.first_or_initialize
  end

  def distributor
    @distributor = Distributor.find(params[:id])
  end

  def distributors
    @distributors = Distributor.all
  end

  def maker
    @manufacture = Manufacture.find(params[:id])
  end

  def logistics
    @logistics = Logistic.all
  end

  def logistic
    @logistic = Logistic.find(params[:id])
  end

  def markets
    @markets = Market.all
  end

  def market
    @market = Market.find(params[:id])
  end

  def goods
    @products = Product.all
  end

  def contacts
    @contacts = Contact.all
  end

  def premium
    @free_manufacture = PremiumManufacture.find_by(type_of_plan: 'Free')
    @basic_manufacture = PremiumManufacture.find_by(type_of_plan: 'Basic')
    @platinum_manufacture = PremiumManufacture.find_by(type_of_plan: 'Platinum')
    @free_distributor = PremiumDistributor.find_by(type_of_plan: 'Free')
    @basic_distributor = PremiumDistributor.find_by(type_of_plan: 'Basic')
    @platinum_distributor = PremiumDistributor.find_by(type_of_plan: 'Platinum')
    @free_market = PremiumMarket.find_by(type_of_plan: 'Free')
    @basic_market = PremiumMarket.find_by(type_of_plan: 'Basic')
    @platinum_market = PremiumMarket.find_by(type_of_plan: 'Platinum')
    @free_logistic = PremiumLogistic.find_by(type_of_plan: 'Free')
    @basic_logistic = PremiumLogistic.find_by(type_of_plan: 'Basic')
    @platinum_logistic = PremiumLogistic.find_by(type_of_plan: 'Platinum')
  end

  def creating_unit
    binding.pry
    unit = RegistrationForm.new
    unit.type_of_activity = params[:category]
    unit.type_of_tariff = params[:selected_fare]
    unit.company_name =  params[:name]
    unit.type_of_products = params[:type_production]
    unit.logo_image = params[:logo]&.tempfile
    unit.description = params[:comment]
    unit.video_url =  params[:link_video]
    unit.catalog_file = params[:catalog]&.tempfile
    unit.price_list_file = params[:price_list]&.tempfile
    unit.certificate_file = params[:certificate]&.tempfile
    unit.country = params[:country]
    unit.city = params[:city]
    unit.street = params[:street]
    unit.phone_number = params[:phone]
    unit.web_site_url = params[:site]
    unit.person_full_name = params[:contact_person]
    unit.person_email = params[:email]
    unit.person_phone_number = params[:contact_person_phone]
    unit.person_fax_number = params[:fax]
    unit.save
    params[:photo]&.each do |photo|
      Image.create(image: photo&.tempfile, registration_form_id: unit.id)
    end
     render json: {}
  end

  def message
  question =  Question.new(params.permit(:email, :name, :phone, :message))
   if question.save
    render json: {message: "Question created"}, status: 200
   else
     render json: {message: "Error"}, status: :bad_request
   end
  end

  def faq
    @faq_articles = Faq.where(category: 'FAQ')
    @guarantee_articles = Faq.where(category: 'Guarantee')
    @payment_articles = Faq.where(category: 'Payment&Shipping')
  end

  def terms
    @rule = Rule.first_or_initialize
  end

  def tradergram
    @articles = Article.all.show.reverse
  end

  def one_news_page
    @article = Article.where(url_fragment: params[:id]).first

    return render 'errors/not_found.html', status: 404 unless @article
  end

  def article
  @product = Product.find(params[:id])
  @recomend_products = Product.where(third_menu_id: @product.third_menu_id).recomend
  @related_products = Product.where(third_menu_id: @product.third_menu_id)
  end

  def products
    @manufactures = Manufacture.all
  end

  private

  def set_locale
    redirect_to root_path(locale: I18n.default_locale) if params[:locale].blank?
    I18n.locale = params[:locale] if params[:locale].present?
  end

  def initialize_locale_links(route_name = nil)
    @locale_links = {}
    route_name ||= action_name
    I18n.available_locales.each do |locale|
      @locale_links[locale.to_sym] = send("#{route_name}_#{locale}_path")
    end
  end

  def set_locale_for_api
    $zalupa = params[:locale]
  end
end
