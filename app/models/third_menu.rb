class ThirdMenu < ActiveRecord::Base
  belongs_to :second_menu, class_name: SecondMenu
  has_one :main_menus, class_name: MainMenu, through: :second_menu
  translates :title
  accepts_nested_attributes_for :translations, allow_destroy: true
  belongs_to :sponsor_sliders, class_name: SponsorSlider
  has_many :sponsor_sliders, class_name: SponsorSlider
  has_many :sponsor_side_sliders, class_name: SponsorSideSlider

  def custom_name
    self.title
  end
end
