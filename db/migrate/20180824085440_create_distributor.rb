class CreateDistributor < ActiveRecord::Migration
  def up
    create_table :distributors do |t|
      t.string :title
      t.integer :second_menu_id
      t.integer :country_id
      t.string  :address
      t.string  :web_site_url
      t.string  :full_name
      t.string  :first_email
      t.string  :second_email
      t.string  :third_email
      t.string  :first_phone_number
      t.string  :second_phone_number
      t.string  :third_phone_number
      t.string  :logo_image
      t.text    :our_benefits
      t.string  :price_list_file
      t.string  :sertificates_file
      t.text    :description
      t.boolean :premium
      t.string  :youtube_url
    end
    Distributor.create_translation_table! :title => :string, :description => :text,
      :address => :string, :full_name => :string, :our_benefits => :text
  end
  def down
      drop_table :distributors
    Distributor.drop_translation_table!
  end
end
