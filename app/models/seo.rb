class Seo < ActiveRecord::Base
  translates :title, :keywords, :description
  accepts_nested_attributes_for :translations, allow_destroy: true
  belongs_to :product, polymorphic: true
  belongs_to :article, polymorphic: true
  belongs_to :manufacture, polymorphic: true
  belongs_to :market, polymorphic: true
  belongs_to :logistic, polymorphic: true
  belongs_to :distributor, polymorphic: true
end
