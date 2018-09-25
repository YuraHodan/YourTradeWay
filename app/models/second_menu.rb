class SecondMenu < ActiveRecord::Base
  belongs_to :main_menu, class_name: MainMenu
  has_many :third_menus, class_name: ThirdMenu
  has_many :distributors, class_name: Distributor
  has_many :manufactures, class_name: Manufacture
  has_many :sponsor_sliders, class_name: SponsorSlider
  has_many :sponsor_side_sliders, class_name: SponsorSideSlider

  translates :title
  accepts_nested_attributes_for :translations, allow_destroy: true
  def custom_name
    self.title
  end
end
