class ChangecolumnQuestion < ActiveRecord::Migration
  def change
    rename_column :questions, :comment, :message
  end
end
