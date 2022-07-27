class RemoveClientIdFromCommandes < ActiveRecord::Migration[6.1]
  def change
    remove_reference :commandes, :client, null: false, foreign_key: true
  end
end
