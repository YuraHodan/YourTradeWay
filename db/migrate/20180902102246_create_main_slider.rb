class CreateMainSlider < ActiveRecord::Migration
  def change
    create_table :main_sliders do |t|
      t.string :image
      t.integer :product_id
      t.boolean :show
    end
  end
end
