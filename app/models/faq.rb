class Faq < ActiveRecord::Base
  translates :title, :description
  accepts_nested_attributes_for :translations, allow_destroy: true
end
