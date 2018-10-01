class MainPageSlider < ActiveRecord::Base
  translates :title, :description
  accepts_nested_attributes_for :translations, allow_destroy: true
  mount_uploader :image, ImageUploader
  belongs_to :product, class_name: Product
  scope :show, -> {where(show: true)}
   validates  :product, :image, presence: true
end
