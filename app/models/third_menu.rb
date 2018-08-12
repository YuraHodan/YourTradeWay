class ThirdMenu < ActiveRecord::Base
  belongs_to :second_menus, class_name: SecondMenu
  has_one :main_menus, class_name: MainMenu, through: :second_menus
  translates :title
  accepts_nested_attributes_for :translations, allow_destroy: true
end
