class CreateCours < ActiveRecord::Migration[6.1]
  def change
    create_table :cours do |t|
      t.string :package
      t.string :durée
      t.string :prix

      t.timestamps
    end
  end
end
