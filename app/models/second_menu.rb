class SecondMenu < ActiveRecord::Base
  belongs_to :main_menus, class_name: MainMenu
  has_many :third_menus, class_name: ThirdMenu
  has_many :distributors, class_name: Distributor
  has_many :manufactures, class_name: Manufacture

  translates :title
  accepts_nested_attributes_for :translations, allow_destroy: true
end
