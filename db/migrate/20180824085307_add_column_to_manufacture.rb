class AddColumnToManufacture < ActiveRecord::Migration
  def change
    add_column :manufactures, :youtube_url, :stirng

  end
end
