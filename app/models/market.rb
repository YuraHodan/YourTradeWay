class Market < ActiveRecord::Base
  mount_uploader :logo_image, ImageUploader
  belongs_to :country, class_name: Country
  has_many :images, class_name: Image
  accepts_nested_attributes_for :images
    belongs_to :main_menu, class_name: MainMenu
    mount_uploader :sertificates_file, FileUploader
    mount_uploader :price_list_file, FileUploader
  has_many :sertificates, class_name: Sertificate
    accepts_nested_attributes_for :sertificates
  translates :title, :description, :address, :full_name, :our_benefits, :our_brands
  accepts_nested_attributes_for :translations, allow_destroy: true
  has_one :seo, as: "market"
  accepts_nested_attributes_for :seo
end
