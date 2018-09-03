class AddcolumnToSeo < ActiveRecord::Migration
  def change
    add_column :seos, :product_id, :integer
    add_column :seos, :logistic_id, :integer
    add_column :seos, :market_id, :integer
    add_column :seos, :distributor_id, :integer
    add_column :seos, :manufacture_id, :integer
    add_column :seos, :article_id, :integer
    add_column :seos, :product_type, :integer
    add_column :seos, :logistic_type, :integer
    add_column :seos, :market_type, :integer
    add_column :seos, :distributor_type, :integer
    add_column :seos, :manufacture_type, :integer
    add_column :seos, :article_type, :integer
  end
end
