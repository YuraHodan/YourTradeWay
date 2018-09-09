class Logistic < ActiveRecord::Base
  belongs_to :country, class_name: Country
  has_many :images, class_name: Image
  accepts_nested_attributes_for :images
  belongs_to :main_menu, class_name: MainMenu
  has_many :sertificates, class_name: Sertificate
    accepts_nested_attributes_for :sertificates
    mount_uploader :sertificates_file, FileUploader
    mount_uploader :price_list_file, FileUploader
    mount_uploader :logo_image, ImageUploader
  has_one :seo, as: "logistic"
  accepts_nested_attributes_for :seo
  validates  :country, :manufacture, :main_menu, :title, :logo_image, presence: true


  translates :title, :description, :address, :full_name, :our_benefits
  accepts_nested_attributes_for :translations, allow_destroy: true
end
