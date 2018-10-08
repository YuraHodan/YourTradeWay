class AboutUs < ActiveRecord::Base
  mount_uploader :tasks_image, ImageUploader
  mount_uploader :about_project_image, ImageUploader
  translates :about_project_description, :tasks_description, :advantages_description
  accepts_nested_attributes_for :translations, allow_destroy: true
end
