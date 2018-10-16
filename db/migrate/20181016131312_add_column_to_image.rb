class AddColumnToImage < ActiveRecord::Migration
  def change
    add_column :images, :registration_form_id, :integer
  end
end
