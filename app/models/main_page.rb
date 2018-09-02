class MainPage < ActiveRecord::Base
    mount_uploader :about_image, ImageUploader

  translates :tradergram_description, :about_description, :request_description
  accepts_nested_attributes_for :translations, allow_destroy: true
end
