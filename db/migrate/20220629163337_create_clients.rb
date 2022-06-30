class CreateClients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|
      t.string :nom
      t.string :pseudo
      t.string :mail
      t.integer :client_id
      t.text :adresse
      t.text :interets
      t.integer :age

      t.timestamps
    end
  end
end
