class RemoveCourIdFromCommandes < ActiveRecord::Migration[6.1]
  def change
    remove_reference :commandes, :cour, null: false, foreign_key: true
  end
end
