class Product < ActiveRecord::Base
  has_many :images, class_name: Image
  has_many :slides, class_name: MainSlider
  accepts_nested_attributes_for :images
  belongs_to :country, class_name: Country
  belongs_to :manufacture, class_name: Manufacture
  belongs_to :third_menu, class_name: ThirdMenu
  mount_uploader :logo_image, ImageUploader
  has_many :sertificates, class_name: Sertificate
    accepts_nested_attributes_for :sertificates
  has_one :seo, as: "product"
  accepts_nested_attributes_for :seo

  translates :title, :description, :type_of_pack, :expiration_date
  accepts_nested_attributes_for :translations, allow_destroy: true
end
