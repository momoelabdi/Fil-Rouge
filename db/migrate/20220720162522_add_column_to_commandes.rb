class AddColumnToCommandes < ActiveRecord::Migration[6.1]
  def change
    add_column :commandes, :client_email, :string
    add_column :commandes, :check_in, :string
    add_column :commandes, :check_out, :string
  end
end
