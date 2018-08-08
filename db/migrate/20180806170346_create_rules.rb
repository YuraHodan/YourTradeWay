class CreateRules < ActiveRecord::Migration
  def change
    create_table :rules do |t|
      t.string :title
      t.text   :description
    end
     Rule.create_translation_table! :title => :string, :description => :text
  end
end
