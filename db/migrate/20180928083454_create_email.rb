class CreateEmail < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.string  :email
      t.boolean :send_email
    end
  end
end
