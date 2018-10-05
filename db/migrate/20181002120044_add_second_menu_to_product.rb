class AddSecondMenuToProduct < ActiveRecord::Migration
  def change
    add_column :products, :second_menu_id, :integer
  end
end
