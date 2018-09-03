class Article < ActiveRecord::Base
    mount_uploader :first_image, ImageUploader
    mount_uploader :second_image, ImageUploader
    mount_uploader :third_image, ImageUploader


  translates :title, :first_description, :second_description, :third_description, :fourth_description
  accepts_nested_attributes_for :translations, allow_destroy: true
  validates :url_fragment, presence: true, uniqueness: {case_sensitive: false}
  before_validation :initialize_url_fragment
  scope :show, -> {where(show: true)}
  has_one :seo, as: "product"
  accepts_nested_attributes_for :seo
  def initialize_url_fragment
    return true if url_fragment.present?
    I18n.with_locale :ru do
        self.url_fragment = title.parameterize
    end
  end
 def to_param
   url_fragment
 end
end
