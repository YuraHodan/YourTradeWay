class AddRecomendation < ActiveRecord::Migration
  def change
    add_column :products, :recomend, :boolean
    add_column :manufactures, :recomend, :boolean
    add_column :distributors, :recomend, :boolean
    add_column :logistics, :recomend, :boolean
    add_column :markets, :recomend, :boolean
  end
end
