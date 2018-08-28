class Country < ActiveRecord::Base
  has_many :products, class_name: Product
  has_many :manufactures, class_name: Manufacture
  has_many :distributors, class_name: Distributor
  has_many :markets, class_name: Market
  has_many :logistics, class_name: Logistic

  translates :title
  accepts_nested_attributes_for :translations, allow_destroy: true
end
