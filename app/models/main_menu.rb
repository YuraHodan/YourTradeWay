class MainMenu < ActiveRecord::Base
  has_many :second_menus, class_name: SecondMenu
  has_many :third_menus, class_name: ThirdMenu, through: :second_menus
  has_many :markets, class_name: Market
  has_many :logistics, class_name: Logistic

  translates :title
  accepts_nested_attributes_for :translations, allow_destroy: true
end
