class CreateSponsorSideSlider < ActiveRecord::Migration
  def change
    create_table :sponsor_side_sliders do |t|
      t.string :image
      t.integer :second_menu_id
      t.integer :third_menu_id
      t.integer :main_menu_id
      t.date    :expiration_date
      t.boolean :show
    end
  end
end
