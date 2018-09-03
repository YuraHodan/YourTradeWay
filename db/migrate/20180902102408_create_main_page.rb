class CreateMainPage < ActiveRecord::Migration
  def change
    create_table :main_pages do |t|
      t.text :tradergram_description
      t.string :about_image
      t.text   :about_description
      t.text   :request_description
    end
     MainPage.create_translation_table! :tradergram_description => :text, :about_description => :text, :request_description => :text
  end
end
