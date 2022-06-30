class CreateCommandes < ActiveRecord::Migration[6.1]
  def change
    create_table :commandes do |t|
      t.string :commande_id
      t.references :client, null: false, foreign_key: true
      t.text :products
      t.datetime :date
      t.datetime :date_de_livraison
      t.string :payement
      t.text :enseigne

      t.timestamps
    end
  end
end
