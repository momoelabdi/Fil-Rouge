class CreateCommandes < ActiveRecord::Migration[6.1]
  def change
    create_table :commandes do |t|
      t.string :date_de_reservation
      t.references :client, null: false, foreign_key: true
      t.references :cour, null: false, foreign_key: true
      t.string :payement

      t.timestamps
    end
  end
end
