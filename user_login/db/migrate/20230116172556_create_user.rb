class CreateUser < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :u_email
      t.string :u_name
      t.string :password_digest
      t.timestamps
    end
  end
end
