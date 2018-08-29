class CreateProduct < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string  :title
      t.float   :price
      t.float   :volume
      t.integer :amount
      t.string  :type_of_pack
      t.float   :weight
      t.string  :expiration_date
      t.text    :description
      t.string  :youtube_url
    end
     Product.create_translation_table! :title => :string, :description => :text, :type_of_pack => :string, :expiration_date => :string
  end
end
