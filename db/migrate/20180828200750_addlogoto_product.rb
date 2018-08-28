class AddlogotoProduct < ActiveRecord::Migration
  def change
    add_column :products, :logo_image, :string
  end
end
