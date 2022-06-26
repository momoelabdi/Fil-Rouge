class CreateClients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :pseudo
      t.integer :client_id
      t.string :address
      t.string :interst

      t.timestamps
    end
  end
end
