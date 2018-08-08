class CreateSecondMenu < ActiveRecord::Migration
  def change
    create_table :second_menus do |t|
      t.string :title
      t.integer :main_menu_id
    end
    SecondMenu.create_translation_table! :title => :string
  end
end
