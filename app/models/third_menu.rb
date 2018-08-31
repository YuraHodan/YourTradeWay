class ThirdMenu < ActiveRecord::Base
  belongs_to :second_menu, class_name: SecondMenu
  has_one :main_menus, class_name: MainMenu, through: :second_menu
  translates :title
  accepts_nested_attributes_for :translations, allow_destroy: true
end
