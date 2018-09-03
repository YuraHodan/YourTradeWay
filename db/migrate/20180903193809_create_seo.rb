class CreateSeo < ActiveRecord::Migration
  def up
    create_table :seos do |t|
      t.string :title
      t.text :keywords
      t.text :description
      t.integer :page_id
      t.string :page_type
    end
    Seo.create_translation_table! :title => :string, :keywords => :text, :description => :text
  end
  def down
    Seo.drop_translation_table!
    drop_table :seos
  end
end
