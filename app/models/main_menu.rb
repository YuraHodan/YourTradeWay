class MainMenu < ActiveRecord::Base
  has_many :second_menus, class_name: SecondMenu
  has_many :third_menus, class_name: ThirdMenu, through: :second_menus
  has_many :markets, class_name: Market
  has_many :logistics, class_name: Logistic
  has_many :sponsor_slider, class_name: SponsorSlider
  has_many :sponsor_side_slider, class_name: SponsorSideSlider



  translates :title
  accepts_nested_attributes_for :translations, allow_destroy: true

  def custom_name
    "#{self.title}" + " " + "#{self.category}"
  end
end
