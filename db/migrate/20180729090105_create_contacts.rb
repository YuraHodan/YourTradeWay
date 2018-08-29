class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :title
      t.string :country
      t.string :address
      t.string :email
      t.string :first_number
      t.string :second_number
      t.string :third_number
      t.string :fax
    end
    Contact.create_translation_table! :title => :string, :country => :string, :address => :string
  end
end
