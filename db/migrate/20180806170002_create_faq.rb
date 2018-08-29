class CreateFaq < ActiveRecord::Migration
  def change
    create_table :faqs do |t|
      t.string :title
      t.text :description
      t.string :category
    end
    Faq.create_translation_table! :title => :string, :description => :text
  end
end
