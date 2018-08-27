class AddColumnToProduct < ActiveRecord::Migration
  def change
    add_column :products, :manufacture_id, :integer
    add_column :products, :third_menu_id, :integer
    add_column :products, :premium, :boolean

  end
end
