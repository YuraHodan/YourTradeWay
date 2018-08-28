class Image < ActiveRecord::Base
  belongs_to :product, class_name: Product
  belongs_to :manufacture, class_name: Manufacture
  belongs_to :distributor, class_name: Distributor
  belongs_to :market, class_name: Market
  belongs_to :logistic, class_name: Logistic

    mount_uploader :image, ImageUploader
end
