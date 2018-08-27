class Market < ActiveRecord::Base
  translates :title, :description, :address, :full_name, :our_benefits, :our_brands
  accepts_nested_attributes_for :translations, allow_destroy: true
end
