class CreateAboutUs < ActiveRecord::Migration
  def change
    create_table :about_us do |t|
      t.text    :about_project_description
      t.string  :about_project_image
      t.text    :tasks_description
      t.string  :tasks_image
      t.text    :advantages_description
      t.integer :products_count
      t.integer :companies_count
    end
    AboutUs.create_translation_table! :about_project_description => :text, :tasks_description => :text, :advantages_description => :text
  end
end

