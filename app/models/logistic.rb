class Logistic < ActiveRecord::Base
  belongs_to :country, class_name: Country
  has_many :images, class_name: Image
  accepts_nested_attributes_for :images
  belongs_to :main_menu, class_name: MainMenu
  has_many :sertificates, class_name: Sertificate
    accepts_nested_attributes_for :sertificates
    mount_uploader :sertificates_file, ImageUploader
    mount_uploader :price_list_file, ImageUploader
    mount_uploader :logo_image, ImageUploader

  translates :title, :description, :address, :full_name, :our_benefits
  accepts_nested_attributes_for :translations, allow_destroy: true
end
