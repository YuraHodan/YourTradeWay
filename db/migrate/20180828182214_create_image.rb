class CreateImage < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :image
      t.integer :product_id
      t.integer :manufacture_id
      t.integer :market_id
      t.integer :distributor_id
      t.integer :logistic_id
    end
  end
end
