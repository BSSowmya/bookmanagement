class CreateBook < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :b_name
      t.string :b_auth
      t.integer :b_quantity
      t.timestamps
    end
  end
end
