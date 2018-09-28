class CreatePremiumLogistic < ActiveRecord::Migration
  def change
    create_table :premium_logistics do |t|
      t.string :type
      t.integer :companies_count
      t.integer :products_count
      t.integer :show_count
    end
  end
end
