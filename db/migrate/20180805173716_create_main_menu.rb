class CreateMainMenu < ActiveRecord::Migration
  def change
    create_table :main_menus do |t|
      t.string :title
      t.string :category
    end
    MainMenu.create_translation_table! :title => :string
  end
end

