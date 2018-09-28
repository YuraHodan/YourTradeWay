class SponsorSideSlider < ActiveRecord::Base
  belongs_to :main_menu, class_name: MainMenu
  belongs_to :second_menu, class_name: SecondMenu
  belongs_to :third_menu, class_name: ThirdMenu

    mount_uploader :image, ImageUploader
  scope :show, -> {where(show: true)}

end
