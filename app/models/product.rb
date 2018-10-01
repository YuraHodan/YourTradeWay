class Product < ActiveRecord::Base
  has_many :images, class_name: Image
  has_many :slides, class_name: MainSlider
  has_one  :main_slide, class_name: MainPageSlider
  accepts_nested_attributes_for :images
  belongs_to :country, class_name: Country
  belongs_to :manufacture, class_name: Manufacture
  belongs_to :third_menu, class_name: ThirdMenu
  mount_uploader :logo_image, ImageUploader
  has_many :sertificates, class_name: Sertificate
    accepts_nested_attributes_for :sertificates
  has_one :seo, as: "product"
  accepts_nested_attributes_for :seo
  scope :premium, -> {where(premium: true)}
  scope :recomend, -> {where(recomend: true)}

  translates :title, :description, :type_of_pack, :expiration_date
  accepts_nested_attributes_for :translations, allow_destroy: true
  validates  :country, :manufacture, :third_menu, :title, :logo_image, presence: true
  def menu_title
  self.third_menu.title
end
    def custom_name
    self.title
  end
end
