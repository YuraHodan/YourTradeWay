class Article < ActiveRecord::Base
    mount_uploader :first_image, ImageUploader
    mount_uploader :second_image, ImageUploader
    mount_uploader :third_image, ImageUploader


  translates :title, :first_description, :second_description, :third_description, :fourth_description
  accepts_nested_attributes_for :translations, allow_destroy: true
end
