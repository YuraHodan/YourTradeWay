class Distributor < ActiveRecord::Base
  belongs_to :country, class_name: Country
  has_many :images, class_name: Image
  mount_uploader :logo_image, FileUploader
  belongs_to :second_menu, class_name: SecondMenu
  accepts_nested_attributes_for :images
  has_many :sertificates, class_name: Sertificate
  accepts_nested_attributes_for :sertificates
    mount_uploader :sertificates_file, FileUploader
    mount_uploader :price_list_file, FileUploader
  translates :title, :description, :address, :full_name, :our_benefits
  accepts_nested_attributes_for :translations, allow_destroy: true
end
