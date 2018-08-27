class Manufacture < ActiveRecord::Base
  translates :title, :description, :address, :full_name
  accepts_nested_attributes_for :translations, allow_destroy: true
end
