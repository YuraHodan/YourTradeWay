class CreateThirdMenu < ActiveRecord::Migration
  def change
    create_table :third_menus do |t|
      t.string :title
      t.integer :second_menu_id
    end
    ThirdMenu.create_translation_table! :title => :string
  end
end
