class PagesController < ApplicationController
  # before_action :initialize_locale_links, except: [:index]

  def index
  end

  def about_us
  end

  def goods
  end

  def contacts
    @contacts = Contact.all
  end

  def message
    # binding.pry  ##dsadasajkdkjqwnjkeqwjkehjkqsdhjkasjkdhasjkdqjkdqwjklndqwlkdnqwlneklklqwelkwq
      render json: {}
  end

  def faq
    @faq_articles = Faq.where(category: 'FAQ')
    @guarantee_articles = Faq.where(category: 'Guarantee')
    @payment_articles = Faq.where(category: 'Payment&Shipping')
  end
  def registration

  end

  def terms
    @rule = Rule.first_or_initialize
  end

  def news
    @articles = Article.all.show.reverse
  end

  def one_news_page
    @article = Article.where(url_fragment: params[:id]).first
    return render 'errors/not_found.html', status: 404 unless @article
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
