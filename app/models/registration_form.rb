class RegistrationForm < ActiveRecord::Base
  mount_uploader :logo_image, ImageUploader
  mount_uploader :catalog_file, FileUploader
  mount_uploader :certificate_file, FileUploader
  mount_uploader :price_list_file, FileUploader
  has_many :images, class_name: Image
  accepts_nested_attributes_for :images
end
