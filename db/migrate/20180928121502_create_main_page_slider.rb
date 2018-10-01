class CreateMainPageSlider < ActiveRecord::Migration
  def change
    create_table :main_page_sliders do |t|
      t.string :title
      t.string :description
      t.integer :product_id
      t.boolean :show
      t.string  :image
    end
    MainPageSlider.create_translation_table! :title => :string, :description => :string
  end
end
