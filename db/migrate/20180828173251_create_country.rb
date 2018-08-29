class CreateCountry < ActiveRecord::Migration
  def change
    create_table :countries do |t|
      t.string :title
    end
    Country.create_translation_table! :title => :string
  end
end
