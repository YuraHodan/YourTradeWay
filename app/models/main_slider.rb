class MainSlider < ActiveRecord::Base
  belongs_to :product, class_name: Product

    mount_uploader :image, ImageUploader
  scope :show, -> {where(show: true)}

end
