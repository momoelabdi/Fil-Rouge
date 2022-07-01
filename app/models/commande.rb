class Commande < ApplicationRecord
  belongs_to :client
  belongs_to :cour
end
