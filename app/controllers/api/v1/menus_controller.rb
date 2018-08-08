class Api::V1::MenusController < Api::V1::BaseController
  def index
    @menus = {}

    respond_with @menus
  end
end
