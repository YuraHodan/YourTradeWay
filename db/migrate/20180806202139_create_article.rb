class CreateArticle < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string  :title
      t.date    :date
      t.text    :first_description
      t.string  :first_image
      t.text    :second_description
      t.string  :second_image
      t.text    :third_description
      t.string  :third_image
      t.text    :fourth_description
      t.boolean :show
    end
  Article.create_translation_table! :title => :string, :first_description => :text,
  :second_description => :text, :third_description => :text, :fourth_description => :text
  end
end
