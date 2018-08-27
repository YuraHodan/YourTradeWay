class Product < ActiveRecord::Base
  translates :title, :description, :type_of_pack, :expiration_date
  accepts_nested_attributes_for :translations, allow_destroy: true
end
