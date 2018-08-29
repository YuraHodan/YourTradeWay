class Contact < ActiveRecord::Base
  translates :title, :country, :address
  accepts_nested_attributes_for :translations, allow_destroy: true
end
