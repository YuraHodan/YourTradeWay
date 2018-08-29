class ApplicationController < ActionController::Base
  # before_action :set_locale
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # include ActionView::Helpers::OutputSafetyHelper
  # include ActionView::Helpers::AssetUrlHelper
  # include ActionView::Helpers::TagHelper
  # include ActionView::Helpers::UrlHelper
  # include Cms::Helpers::PagesHelper
  # include Cms::Helpers::MetaDataHelper
  # include Cms::Helpers::NavigationHelper
  # include Cms::Helpers::ActionView::UrlHelper

  def render_not_found
    render template: "errors/not_found.html.slim"
  end

  #   def set_locale
  #  I18n.locale = params[:locale]
  # end
  # def root_without_locale
  #   if params[:locale] == I18n.default_locale
  #     redirect_to root_path
  #   end
 #  end
end
