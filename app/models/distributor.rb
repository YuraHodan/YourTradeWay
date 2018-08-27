class Distributor < ActiveRecord::Base
  translates :title, :description, :address, :full_name, :our_benefits
  accepts_nested_attributes_for :translations, allow_destroy: true
end
