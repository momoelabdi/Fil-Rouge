class CommandesController < ApplicationController

  def new
    @commandes = Commande.new
  end
end
